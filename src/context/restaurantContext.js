import React, { useEffect, useState, useMemo, createContext } from 'react';
import axios from 'axios';
import lodash from 'lodash';

// For an application of this scale, the useContext API works well
// for state management and is lightweight, no Redux is needed for this
export const RestaurantContext = createContext();

const RestaurantContextProvider = ({ content }) => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const restaurantProvider = useMemo(() => ({ restaurantsList, setRestaurantsList }), [restaurantsList, setRestaurantsList]);

// Fetch the restaurant data from the MongoDB database and in the end, use a cleanup function
// to ensure no memory leaks happen etc.
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    
    (async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getAllRestaurants', { cancelToken: source.token });
          setRestaurantsList(lodash.sortBy(response.data, ['name']));
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Fetch cancelled.");
        } else {
          throw error;
        }
      };
    })();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <RestaurantContext.Provider value={restaurantProvider}>
      {content}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;

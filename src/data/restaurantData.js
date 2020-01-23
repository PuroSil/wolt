import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantData = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getAllRestaurants', { cancelToken: source.token });
          setRestaurantsList(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Fetch cancelled.");
        } else {
          throw error;
        }
      };
    };
    fetchData();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <ol>
      {restaurantsList &&
      restaurantsList.map((entry) =>
        <li>
          <strong>{ entry.name }</strong>
          , { entry.city }
          <br/>
          { entry.tags.join(', ')}
          <br/>
        </li>
      )}
    </ol>
  );
};

export default RestaurantData;
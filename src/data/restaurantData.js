import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantData = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get('http://localhost:8000/api/getAllRestaurants');
        return (
          setRestaurantsList(response.data)
        );
      } catch (err) {
          return console.log(err);
      }
    }());
  }, []);

  return (
    <ol>
      {restaurantsList &&
      restaurantsList.map((entry) =>
        <li>
          <strong>{ entry.name }</strong>
          <br/>
          { entry.tags.join(', ')}
          <br/>
        </li>
      )}
    </ol>
  );
};

export default RestaurantData;
import React, { useState } from 'react';
import { restaurants } from '../data/restaurantData.json';

const RestaurantContainer = () => {
  const [restaurantsList, setRestaraunts] = useState(restaurants)

  return (
    <ol>
      {restaurantsList.map((entry) => 
        <li>
          { entry.name }
          <br/>
          { entry.city }
        </li>
      )}
    </ol>
  );
};

export default RestaurantContainer;

import React, { useContext } from 'react';
import { RestaurantContext } from '../../restaurantContext';
import ImageElement from '../../components/image/image';

const RestaurantContainer = ({ imgUrl }) => {
  const restaurants = useContext(RestaurantContext);

  return (
    <div>
      <ImageElement src={imgUrl} />
      <ol>
        {restaurants &&
        restaurants.map((entry) =>
          <li key={ entry.location }>
            <strong>{ entry.name }</strong>
            , { entry.city }
            <br/>
            { entry.tags.join(', ')}
            <br/>
          </li>
        )}
      </ol>
    </div>
  );
};

export default RestaurantContainer;

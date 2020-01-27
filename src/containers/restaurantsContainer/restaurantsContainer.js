import React, { useContext, useState } from 'react';
import { RestaurantContext } from '../../restaurantContext';
import ImageElement from '../../components/image/image';
import Button from '../../components/button/button';

const RestaurantContainer = ({ imgUrl }) => {
  const [order, setOrder] = useState(false);
  const { restaurantsList, setRestaurantsList } = useContext(RestaurantContext);

  const reverseOrder = () => {
    setOrder(!order);
    setRestaurantsList([...restaurantsList.reverse()]);
  };

  return (
    <div>
      <ImageElement src={imgUrl} />
      <Button 
        text={"Ascending"} 
        event={reverseOrder} 
        style={{ pointerEvents: order ? "all" : "none", opacity: order ? "1" : "0.5" }} 
      />
      <Button 
        text={"Descending"} 
        event={reverseOrder} 
        style={{ pointerEvents: order ? "none" : "all", opacity: order ? "0.5" : "1" }} 
      />
      <ol>
        {restaurantsList &&
        restaurantsList.map((entry) =>
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

import React, { useContext, useState } from 'react';
import { RestaurantContext } from '../../restaurantContext';
import Button from '../../components/button/button';
import RestaurantBlock from '../../components/restaurantBlock/restaurantBlock';
import './restaurantsContainer.css';
// BlurHash could be used to blur out restaurant images in order to focus certain others
// Leaving the dependency for now
import { BlurhashCanvas } from "react-blurhash";

const RestaurantContainer = () => {
  const [order, setOrder] = useState(false);
  const { restaurantsList, setRestaurantsList } = useContext(RestaurantContext);

  const reverseOrder = () => {
    setOrder(!order);
    setRestaurantsList([...restaurantsList.reverse()]);
  };

  return (
    <div className="container__restaurants">
      <section>
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
      </section>
      <section className="container__restaurants_section_entries">
        {restaurantsList &&
        restaurantsList.map((entry) =>
          <RestaurantBlock
            imgUrl={entry.image}
            key={entry.location} 
            name={entry.name} 
            city={entry.city } 
            description={entry.description} 
            tags={entry.tags.join(', ')}
            price={entry.deliveryPrice} 
          />
        )}
      </section>
    </div>
  );
};

export default RestaurantContainer;

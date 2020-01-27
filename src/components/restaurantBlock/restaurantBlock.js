import React from 'react';
import './restaurantBlock.css';

const RestaurantBlock = ({ name, city, description, tags, price, imgUrl }) => {
  return (
    <div className="block__restaurant">
      <section className="block__restaurant_image" style={{backgroundImage: `url(${imgUrl})`}} /> 
      <section className="block__restaurant_text">
        <section className="block__restaurant_text_upper">
          <h1>{name}</h1>
          <h3>{city}</h3>
        </section>
        <section className="block__restaurant_text_lower">
          <p>{description}</p>
          <div>
            <h4>{tags}</h4>
            <h4>€ {price}</h4>
          </div>
        </section>
      </section>
    </div>
  );
};

export default RestaurantBlock;

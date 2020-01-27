import React from 'react';
import './restaurantBlock.css';

const RestaurantBlock = ({ name, city, description, tags, imgUrl }) => {
  return (
    <div className="block__restaurant">
      <section className="block__restaurant_image" style={{backgroundImage: `url(${imgUrl})`}} /> 
      <section className="block__restaurant_text">
        <h1>{name}</h1>
        <h3>{city}</h3>
        <p>{description}</p>
        <h4>{tags}</h4>
      </section>
    </div>
  );
};

export default RestaurantBlock;

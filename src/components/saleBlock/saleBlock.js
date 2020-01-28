import React from 'react';
import './saleBlock.css';

const SaleBlock = ({ name, city, description, tags, price, imgUrl }) => {
  return (
    <section className="block__sale" >
      <div className="block__sale_left" style={{backgroundImage: `url(${imgUrl})`}} />
      <div className="block__sale_right">
        <h1>Sale of the day!</h1>
        <h1>{name}</h1>
        <h2>{city}</h2>
        <p>{description}</p>
        </div>
    </section>
  );
};


export default SaleBlock;
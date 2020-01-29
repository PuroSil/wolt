import React from 'react';
import './menuItem.css';
import Button from '../button/button';

//A static component for now as we lack real menu data
const MenuItem = () => {
  return (
    <div className="menu__item">
      <section className="menu__item_left">
        <h2>Menu Item:</h2>
        <p>Item description that includes ingredients, including if drink is included.</p>
        <h4>€ 10</h4>
        <Button text={"Add"} />
      </section>
      <section className="menu__item_right"></section>
    </div>
  );
};

export default MenuItem;
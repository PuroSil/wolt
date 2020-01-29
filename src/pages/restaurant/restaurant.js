import React from 'react';
import ImageElement from '../../components/image/image';
import { NavLink } from 'react-router-dom';
import Button from '../../components/button/button';
import './restaurant.css';
import MenuItem from '../../components/menuItem/menuItem';

const Restaurant = (imgUrl) => {

  const scrollIntoCategory = () => {
  }

  return (
    <div className="page page__restaurant" style={{backgroundImage: `url(${imgUrl})`}}>
      <section className="page__restaurant_upper">
        <div className="black__overlay">
          <section className="page__restaurant_upper_content">
            <NavLink exact to="/" activeClassName="active">
              <ImageElement className={"logo"} alt={"Wolt company logo"} src={require("../../resources/images/woltWhite.png")} />
            </NavLink>
            <h1>Restaurant XXX</h1>
            <h2>Delivery hours:</h2>
            <div className="page__restaurant_hours">
              <span>Mon - Fri</span>
              <span>10 - 18</span>
            </div>
            <div className="page__restaurant_hours">
              <span>Sat - Sun</span>
              <span>10 - 16</span>
            </div>
            <h3>Average delivery time today: 22 min</h3>
            <div className="page__restaurant_upper_tags">
              <h4>tag</h4>
              <h4>tag</h4>
            </div>
          </section>
        </div>
      </section>
      <section className="page__restaurant_lower">
        <section className="page__restaurant_lower_left">
          <h3>
          A placeholder intro text for a restaurant as my database does not have real intro texts or menus. 
          It would include a basic information about the restaurant and the type of food offered and some 
          fluff text to further raise the interest of a potential customer and give a brief overview.
          </h3>
          <h2 className="page__restaurant_category_title">Category one</h2>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <h2 className="page__restaurant_category_title">Category two</h2>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <h2 className="page__restaurant_category_title">Category three</h2>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </section>
        <section className="page__restaurant_lower_right">
          <h2>Open Today:</h2>
          <div className="page__restaurant_hours">
              <span>10:30 - 18:00</span>
            </div>
            <h2>Shopping Cart:</h2>
            <div className="page__restaurant_lower_right_shop">
              <ImageElement alt={"Shopping cart icon"} src={require("../../resources/images/smart-cart.png")} />
              <h3>0 ITEMS</h3>
            </div>
            <Button text={"ORDER"}/>
            <ul>
              <li onClick={scrollIntoCategory}>Category one</li>
              <li onClick={scrollIntoCategory}>Category two</li>
              <li onClick={scrollIntoCategory}>Category three</li>
            </ul>
        </section>
      </section>
    </div>
  );
};

export default Restaurant;

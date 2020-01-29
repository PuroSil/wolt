import React from 'react';
import ImageElement from '../../components/image/image';
import { NavLink } from 'react-router-dom';
import './restaurant.css';

const Restaurant = (imgUrl) => {
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
            <div className="page__restaurant_upper_hours">
              <span>Mon - Fri</span>
              <span>10 - 18</span>
            </div>
            <div className="page__restaurant_upper_hours">
              <span>Sat - Sun</span>
              <span>10 - 16</span>
            </div>
            <h3>Average delivery time today: 22 min</h3>
          </section>
        </div>
      </section>
      <section className="page__restaurant_lower">
        <h1>Lower</h1>
      </section>
    </div>
  );
};

export default Restaurant;

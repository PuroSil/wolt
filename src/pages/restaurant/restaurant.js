import React from 'react';
import ImageElement from '../../components/image/image';
import { NavLink } from 'react-router-dom';
import './restaurant.css';

const Restaurant = () => {
  return (
    <div className="page page__restaurant">
      <NavLink exact to="/" activeClassName="active">
        <ImageElement className={"logo"} alt={"Wolt company logo"} src={require("../../resources/images/woltLogo.png")} />
      </NavLink>
      <h1 className="page__results_title">Restaurants XXX</h1>
    </div>
  );
};

export default Restaurant;

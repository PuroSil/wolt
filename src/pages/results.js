import React from 'react';
import RestaurantContainer from '../containers/restaurantContainer/restaurantContainer';
import RestaurantData from '../data/restaurantData';
import { NavLink } from 'react-router-dom';
import './pages.css';

const Results = () => {
  return (
    <div className="page">
      <NavLink exact to="/" activeClassName="active" >
        <span aria-label="Navigation link">To Landing</span>
      </NavLink>
      <RestaurantData />
    </div>
  );
};

export default Results;

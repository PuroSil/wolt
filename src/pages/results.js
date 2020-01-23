import React from 'react';
import RestaurantContainer from '../containers/restaurantContainer';
import RestaurantData from '../data/restaurantData';
import { NavLink } from 'react-router-dom';
import './pages.css';
import Button from '../components/button/button';

const Results = () => {
  return (
    <div className="page">
      <NavLink exact to="/" activeClassName="active">
        <Button aria-label="Navigation link" text={"To Landing"}/>
      </NavLink>
      <RestaurantData />
    </div>
  );
};

export default Results;

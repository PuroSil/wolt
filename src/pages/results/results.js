import React from 'react';
import RestaurantData from '../../data/restaurantData';
import { NavLink } from 'react-router-dom';
import '../pages.css';
import Button from '../../components/button/button';

const Results = () => {
  return (
    <div className="page page__results">
      <NavLink exact to="/" activeClassName="active">
        <Button aria-label="Navigation link" text={"To Landing"}/>
      </NavLink>
      <RestaurantData />
    </div>
  );
};

export default Results;

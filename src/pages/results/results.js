import React from 'react';
import { NavLink } from 'react-router-dom';
import '../pages.css';
import Button from '../../components/button/button';
import RestaurantContainer from '../../containers/restaurantsContainer/restaurantsContainer';

const Results = () => {
  return (
    <div className="page page__results">
      <NavLink exact to="/" activeClassName="active">
        <Button aria-label="Navigation link" text={"To Landing"}/>
      </NavLink>
      <RestaurantContainer />
    </div>
  );
};

export default Results;

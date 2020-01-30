import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageElement from '../../components/image/image';
import RestaurantContainer from '../../containers/restaurantsContainer/restaurantsContainer';
import Search from '../../components/search/search';
import './results.css';
import '../pages.css';

const Results = () => {
  return (
    <div className="page page__results">
      <NavLink exact to="/" activeClassName="active">
        <ImageElement className={"logo"} alt={"Wolt company logo"} src={require("../../resources/images/woltLogo.png")} />
      </NavLink>
      <Search />
      <h1 className="page__results_title">Restaurants in Helsinki:</h1>
      <RestaurantContainer />
    </div>
  );
};

export default Results;

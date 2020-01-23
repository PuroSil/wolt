import React from 'react';
import { NavLink } from 'react-router-dom';
import '../pages.css';
import './landing.css';
import Button from '../../components/button/button';
import SearchContainer from '../../containers/searchContainer/searchContainer';

const Landing = () => {
  return (
    <div className="page page__landing">
      <SearchContainer content={
        <>
          <img className="logo" src={require("../../resources/images/woltLogo.png")} alt="Wolt company logo" />
          <h3>Your culinary desires are our mission!</h3>
          <span className="input">
            <img src={require("../../resources/images/placeholder.png")} alt="Geolocation image" />
            <input type="text" placeholder="Type your address..."></input>
          </span>
          <NavLink exact to="/results" activeClassName="active">
            <Button aria-label="Navigation link" text={"Search for Restaurants"} />
          </NavLink>
          <br/>
          <NavLink exact to="/results" activeClassName="active">
            <Button aria-label="Navigation link" text={"See Nearby Restaurants"} />
          </NavLink>
        </>
      } />
    </div>
  );
};

export default Landing;

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../pages.css';
import './landing.css';
import Button from '../../components/button/button';
import SearchContainer from '../../containers/searchContainer/searchContainer';
import ImageElement from '../../components/image/image';
const { geoLocation } = require('../../utils/geoLocation');

const Landing = () => {
  return (
    <div onLoad={geoLocation} className="page page__landing">
      <SearchContainer content={
        <>
          <ImageElement className={"logo"} alt={"Wolt company logo"} src={require("../../resources/images/woltLogo.png")} />
          <h3>The ecological way of filling your culinary desires</h3>
          <span className="input__address">
            <ImageElement className={""} alt={"Geolocation logo"} src={require("../../resources/images/placeholder.png")} />
            <p>Where do you want it delivered?</p>
            <input type="text" placeholder="Type your address..." id="input__address"></input>
            <NavLink exact to="/results" activeClassName="active">
              <Button aria-label="Navigation link" text={"SEARCH FOR RESTAURANTS"} />
            </NavLink>
          </span>
          <p>Show me nearby restaurants</p>
          <NavLink onClick={geoLocation} exact to="/results" activeClassName="active" id="button__nearby">
            <Button aria-label="Navigation link" text={"SEE NEARBY RESTAURANTS"} />
          </NavLink>
        </>
      } />
    </div>
  );
};

export default Landing;

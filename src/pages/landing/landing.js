import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../pages.css';
import './landing.css';
import Button from '../../components/button/button';
import SearchContainer from '../../containers/searchContainer/searchContainer';
import ImageElement from '../../components/image/image';
import { NearbyContext } from '../../context/nearbyContext';
import { LocationContext } from '../../context/locationContext';

const Landing = () => {
  const { close, setClose } = useContext(NearbyContext);
  const { userLocation } = useContext(LocationContext);

  const switchClose = () => {
    setClose(!close);
  };

  return (
    <div className="page page__landing">
      <SearchContainer content={
        <>
          <ImageElement className={"logo"} alt={"Wolt company logo"} src={require("../../resources/images/woltLogo.png")} />
          <h3>The ecological way of filling your culinary desires</h3>
          <span className="input__address">
            <ImageElement className={""} alt={"Geolocation logo"} src={require("../../resources/images/placeholder.png")} />
            <p>Where do you want it delivered?</p>
            <input type="text" placeholder="Type your address..." id="input__address"></input>
            <NavLink exact to="/results">
              <Button aria-label="Navigation link" text={"SEARCH FOR RESTAURANTS"} />
            </NavLink>
          </span>
          <p>Show me nearby restaurants</p>
          <NavLink exact to="/results" 
            style={{ pointerEvents: userLocation.length === 0 ? "none" : "all", opacity: userLocation.length === 0 ? "0.5" : "1" }}
          >
            <Button aria-label="Navigation link" text={"SEE NEARBY RESTAURANTS"} event={switchClose} />
          </NavLink>
        </>
      }/>
    </div>
  );
};

export default Landing;

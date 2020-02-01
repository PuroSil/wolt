import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NearbyContext } from '../../context/nearbyContext';
import { LocationContext } from '../../context/locationContext';
import Button from '../../components/button/button';
import SearchContainer from '../../containers/searchContainer/searchContainer';
import ImageElement from '../../components/image/image';
import Form from '../../components/form/form';
import Input from '../../components/input/input';
import '../pages.css';
import './landing.css';

const Landing = () => {
  const { setClose } = useContext(NearbyContext);
  const { userLocation } = useContext(LocationContext);
  
  const setCloseStatus = () => {
    setClose(true);
  };

  return (
    <div className="page page__landing">
      <SearchContainer content={
        <>
          <ImageElement className={"logo"} alt={"Wolt company logo"} src={require("../../resources/images/woltLogo.png")} />
          <h3>The ecological way of filling your culinary desires</h3>
            <Form className={"search__form"} content={
              <>
                <ImageElement className={""} alt={"Geolocation logo"} src={require("../../resources/images/placeholder.png")} />
                <p>Where do you want it delivered?</p>
                <Input type={"text"} placeholder={"Type your address..."} />
                <NavLink exact to="/results">
                  <Button aria-label="Navigation link" text={"SEARCH FOR RESTAURANTS"} />
                </NavLink>
              </>
            }/>
          <p>Show me nearby restaurants</p>
          <NavLink exact to="/results" 
            style={{ pointerEvents: userLocation.length === 0 ? "none" : "all", opacity: userLocation.length === 0 ? "0.5" : "1" }}
          >
            <Button aria-label="Navigation link" text={"SEE NEARBY RESTAURANTS"} event={setCloseStatus} />
          </NavLink>
        </>
      }/>
    </div>
  );
};

export default Landing;

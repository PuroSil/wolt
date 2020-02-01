import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RestaurantContext } from '../../context/restaurantContext';
import { LocationContext } from '../../context/locationContext';
import { NearbyContext } from '../../context/nearbyContext';
import { SelectedResContext } from '../../context/selectedResContext';
import Button from '../../components/button/button';
import RestaurantBlock from '../../components/restaurantBlock/restaurantBlock';
import SaleBlock from '../../components/saleBlock/saleBlock';
import './restaurantsContainer.css';
// There are several libraries for distance calculating, this one had the most support
// and seems somewhat future proof until I get Google Maps API to work
import { getDistance } from 'geolib';
// BlurHash could be used to blur out restaurant images in order to e.g. focus more on certain others
// or on slow connections it could speed up page loading while waiting for full pictures to load as the blurhash images are compact.
// Leaving the dependency for now for future use
//import { BlurhashCanvas } from "react-blurhash";
const { price } = require('../../utils/price');
const { reverseOrder } = require('../../utils/reverseOrder');

const RestaurantContainer = () => {
  const [order, setOrder] = useState(false);
  const { close, setClose } = useContext(NearbyContext);
  const { userLocation } = useContext(LocationContext);
  const { setSelectedRes } = useContext(SelectedResContext);
  const { restaurantsList, setRestaurantsList } = useContext(RestaurantContext);
  const [saleItem, setSaleItem] = useState(null);

  useEffect(() => {
    setSaleItem(restaurantsList[Math.floor(Math.random() * restaurantsList.length)]);
  }, [restaurantsList]);

  const switchClose = () => {
    setClose(!close);
  };

  const setSelectedRestaurant = (name, image, tags) => {
    setSelectedRes({name: name, image: image, tags: [tags]})
  }

  // I had problems with Google Maps API, so this function
  // is a placeholder and calculates crow's distance between
  // two points to get nearby restaurants, not ideal, but at least it works
  const distance = (lat1, lon1, lat2, lon2) => {
    return getDistance(
      { latitude: lat1, longitude: lon1 },
      { latitude: lat2, longitude: lon2 }
    );
  };

  return (
    <div className="container__restaurants">
      {saleItem ?
        <NavLink exact to="/restaurant" activeClassName="active"> 
          <SaleBlock 
            name={`${saleItem.name} -25%`} 
            city={saleItem.city} 
            description={saleItem.description}
            imgUrl={saleItem.image}
            event={() => setSelectedRestaurant(saleItem.name, saleItem.image, saleItem.tags)}
          /> 
        </NavLink>
      : null
      }
      <section className="container__restaurants_buttons">
        <div className="container__restaurants_buttons_left">
          <h2>Order by name:</h2>
          <Button 
            text={"Ascending"}
            event={
              () => reverseOrder(
                setOrder, setRestaurantsList, order, restaurantsList
              )} 
            style={{ pointerEvents: order ? "all" : "none", opacity: order ? "1" : "0.5" }} 
          />
          <Button 
            text={"Descending"}
            event={() => reverseOrder(
              setOrder, setRestaurantsList, order, restaurantsList
            )} 
            style={{ pointerEvents: order ? "none" : "all", opacity: order ? "0.5" : "1" }} 
          />
        </div>
        <div className="container__restaurants_buttons_right">
          <h2>Show { close ? "all:" : "nearby:"}</h2>
          <Button
            text={ close ? "All" : "Nearby"} 
            event={switchClose} 
            style={{ pointerEvents: userLocation.length === 0 ? "none" : "all", opacity: userLocation.length === 0 ? "0.5" : "1" }}
          />
          </div>
      </section>
      <section className="container__restaurants_section_entries">
        {restaurantsList &&
        restaurantsList.map((entry) =>
        // From my location at the time of writing this, which was Jätkäsaari in Helsinki, all restaurants
        // were between 2 to 3 kilometers, but after faking some GPS, I managed to test and see that this works
        // TODO: Make this less ugly and use https://developers.google.com/maps/documentation/distance-matrix/start
          {if(userLocation.length > 0)  {
            return (
              <NavLink exact to="/restaurant" key={entry.name}>
                <RestaurantBlock
                  imgUrl={entry.image}
                  key={entry.location} 
                  name={entry.name} 
                  city={entry.city } 
                  description={entry.description} 
                  tags={entry.tags.join(', ')}
                  price={price(entry, userLocation, distance, close)}
                  event={() => setSelectedRestaurant(entry.name, entry.image, entry.tags)}
                />
              </NavLink>
            )
          } else if (!close) {
            return (
              <NavLink exact to="/restaurant" key={entry.name}>
                <RestaurantBlock
                  imgUrl={entry.image}
                  key={entry.location} 
                  name={entry.name} 
                  city={entry.city } 
                  description={entry.description} 
                  tags={entry.tags.join(', ')}
                  price={price(entry, userLocation, distance, close)}
                  event={() => setSelectedRestaurant(entry.name, entry.image, entry.tags)}
                />
              </NavLink>
            )
          } else {
            return null;
          }
        })}
      </section>
    </div>
  );
};

export default RestaurantContainer;

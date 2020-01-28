import React, { useContext, useState } from 'react';
import { RestaurantContext } from '../../context/restaurantContext';
import { LocationContext } from '../../context/locationContext';
import { NearbyContext } from '../../context/nearbyContext';
import Button from '../../components/button/button';
import RestaurantBlock from '../../components/restaurantBlock/restaurantBlock';
import './restaurantsContainer.css';
// There are several libraries for distance calculating, this one had the most support
// and seems somewhat future proof until I get Google Maps API to work
import { getDistance } from 'geolib';
// BlurHash could be used to blur out restaurant images in order to focus certain others
// Leaving the dependency for now
import { BlurhashCanvas } from "react-blurhash";
import SaleBlock from '../../components/saleBlock/saleBlock';

const RestaurantContainer = () => {
  const [order, setOrder] = useState(false);
  const { close, setClose } = useContext(NearbyContext);
  const { restaurantsList, setRestaurantsList } = useContext(RestaurantContext);
  const { userLocation, setUserLocation } = useContext(LocationContext);
  const saleItem = restaurantsList[Math.floor(Math.random() * restaurantsList.length)];

  const reverseOrder = () => {
    setOrder(!order);
    setRestaurantsList([...restaurantsList.reverse()]);
  };

  const switchClose = () => {
    setClose(!close);
  };

  // I had problems with Google Maps API, so this function
  // is a placeholder and calculates crow's distance between
  // two points to get nearby restaurants, not ideal, but at least it works
  const distance = (lat1, lon1, lat2, lon2) => {
    return getDistance(
      { latitude: lat1, longitude: lon1 },
      { latitude: lat2, longitude: lon2 }
    );
  };

  // Calculating a placeholder price for the UI based on distance if the user has given their location
  const price = (el) => {
    if(userLocation.length === 0) {
      return el.deliveryPrice;        
    } else if (close && userLocation.length > 0) {
      return (el.deliveryPrice + Math.round(
        (distance(el.location[1], el.location[0], userLocation[1], userLocation[0]) / 100) * 100 / 100))
    } else {
      return el.deliveryPrice + 0;
    }
  }

  return (
    <div className="container__restaurants">
      {saleItem ? 
        <SaleBlock 
          name={saleItem.name} 
          city={saleItem.city} 
          description={saleItem.description}
          imgUrl={saleItem.image} 
        /> 
        : null
      }
      <section className="container__restaurants_buttons">
        <div className="container__restaurants_buttons_left">
          <h2>Order by name:</h2>
          <Button 
            text={"Ascending"} 
            event={reverseOrder} 
            style={{ pointerEvents: order ? "all" : "none", opacity: order ? "1" : "0.5" }} 
          />
          <Button 
            text={"Descending"} 
            event={reverseOrder} 
            style={{ pointerEvents: order ? "none" : "all", opacity: order ? "0.5" : "1" }} 
          />
        </div>
        <Button
          text={ close ? "All Restaurants" : "Nearby Restaurants"} 
          event={switchClose} 
          style={{ pointerEvents: userLocation.length === 0 ? "none" : "all", opacity: userLocation.length === 0 ? "0.5" : "1" }}
        />
      </section>
      <section className="container__restaurants_section_entries">
        {restaurantsList &&
        restaurantsList.map((entry) =>
        // From my location at the time of writing this, which was Jätkäsaari in Helsinki, all restaurants
        // were between 2 to 3 kilometers, but after faking some GPS, I managed to test and see that this works
        // TODO: Make this less ugly and use https://developers.google.com/maps/documentation/distance-matrix/start
          {if(close && distance(entry.location[1], entry.location[0], userLocation[1], userLocation[0]) < 1000) {
            return (
              <RestaurantBlock
                imgUrl={entry.image}
                key={entry.location} 
                name={entry.name} 
                city={entry.city } 
                description={entry.description} 
                tags={entry.tags.join(', ')}
                price={price(entry)} 
              />
            )
          } else if (!close) {
            return (
              <RestaurantBlock
                imgUrl={entry.image}
                key={entry.location} 
                name={entry.name} 
                city={entry.city } 
                description={entry.description} 
                tags={entry.tags.join(', ')}
                price={price(entry)}              
              />
            )
          }
        })}
      </section>
    </div>
  );
};

export default RestaurantContainer;

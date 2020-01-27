import React, { useContext, useState } from 'react';
import { RestaurantContext } from '../../restaurantContext';
import { LocationContext } from '../../locationContext';
import Button from '../../components/button/button';
import RestaurantBlock from '../../components/restaurantBlock/restaurantBlock';
import './restaurantsContainer.css';
// There are several libraries for distance calculating, this one had the most support
// and seems somewhat future proof until I get Google Maps API to work
import { getDistance } from 'geolib';
// BlurHash could be used to blur out restaurant images in order to focus certain others
// Leaving the dependency for now
import { BlurhashCanvas } from "react-blurhash";

const RestaurantContainer = () => {
  const [order, setOrder] = useState(false);
  const [close, setClose] = useState(false);
  const { restaurantsList, setRestaurantsList } = useContext(RestaurantContext);
  const { userLocation, setUserLocation } = useContext(LocationContext);

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
  }

  return (
    <div className="container__restaurants">
      <section className="container__restaurants_buttons">
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
        <Button 
          text={"Nearby Restaurants"} 
          event={switchClose} 
        />
      </section>
      <section className="container__restaurants_section_entries">
        {restaurantsList &&
        restaurantsList.map((entry) =>
        // From my location at the time of writing this, which was Jätkäsaari in Helsinki, all restaurants
        // were between 2 to 3 kilometers, but after faking some GPS, I managed to test and see that this works
        // TODO: Make this less ugly and use https://developers.google.com/maps/documentation/distance-matrix/start
          {if(close && distance(entry.location[1], entry.location[0], userLocation[1], userLocation[0]) < 3000) {
            return (
              <RestaurantBlock
                imgUrl={entry.image}
                key={entry.location} 
                name={entry.name} 
                city={entry.city } 
                description={entry.description} 
                tags={entry.tags.join(', ')}
                // Just some calculations for the price for the UI, no idea what the real prices are
                price={entry.deliveryPrice + Math.round(
                  (distance(entry.location[1], entry.location[0], userLocation[1], userLocation[0]) / 100) * 100 / 120)
                } 
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
                price={entry.deliveryPrice + Math.round(
                  (distance(entry.location[1], entry.location[0], userLocation[1], userLocation[0]) / 100) * 100 / 120)
                } 
              />
            )
          }
        })}
      </section>
    </div>
  );
};

export default RestaurantContainer;

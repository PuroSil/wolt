import React, { useState, useMemo, Suspense, lazy } from 'react';
import { withRouter, Switch, Route, useLocation } from 'react-router-dom';
import { config, useTransition, animated } from 'react-spring';
import { LocationContext } from './context/locationContext';
import Landing from './pages/landing/landing';
import Restaurant from './pages/restaurant/restaurant';
import RestaurantContextProvider from './context/restaurantContext';
import NearbyContextProvider from './context/nearbyContext';
import './app.css';
// The restaurant listing loads a large amount of images and data which might slow
// the rendering of pages down which why lazy loading to ease things a bit 
const Results = lazy(() => import('./pages/results/results'));

const App = () => {
  const [userLocation, setUserLocation] = useState([]);
  const locationProvider = useMemo(() => ({ userLocation, setUserLocation }), [userLocation, setUserLocation]);

  // We ask the user to share us their position coordinates so we can calculate
  // the price of delivery for the UI
  const geoLocation = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(position);
    } else { 
      console.log("Geolocation is not supported by this browser.");
    };
  };

  const position = (position) => {
    setUserLocation([...userLocation, position.coords.longitude, position.coords.latitude]);
  };

  // React Spring animation settings
  const location = useLocation();
  const pageTransitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0},
    config: config.slow
  });

  return (
    <div className="app" onLoad={geoLocation}>
      {pageTransitions.map(({item, props, key}) => (
        <animated.div key={key} style={props}>
          <LocationContext.Provider value={locationProvider}>
          <NearbyContextProvider content={
            <RestaurantContextProvider content={
              <Suspense fallback={<h1>Restaurants loading...</h1>}>
                <Switch location={item}>
                  <Route path="/" exact component={Landing} />
                  <Route path="/results" component={Results} />
                  <Route path="/restaurant" component={Restaurant} />
                </Switch>
              </Suspense>
              }>
            </RestaurantContextProvider>
          }>
          </NearbyContextProvider>
          </LocationContext.Provider>
        </animated.div>
      ))}
    </div>
  );
};

export default withRouter(App);

import React, { useState, useMemo, Suspense, lazy } from 'react';
import { withRouter, Switch, Route, useLocation } from 'react-router-dom';
import { config, useTransition, animated } from 'react-spring';
import { LocationContext } from './context/locationContext';
import Landing from './pages/landing/landing';
import Restaurant from './pages/restaurant/restaurant';
import './app.css';
// The restaurant listing loads a large amount of images and data which might slow
// the rendering of pages down which why lazy loading to ease things a bit 
const Results = lazy(() => import('./pages/results/results'));
const { geoLocation } = require('./utils/geoLocation');

const App = () => {
  const [userLocation, setUserLocation] = useState([]);
  const locationProvider = useMemo(() => ({ userLocation, setUserLocation }), [userLocation, setUserLocation]);
  const location = useLocation();

  // React Spring animation settings
  const pageTransitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0},
    config: config.gentle
  });

  return (
    <div className="app" onLoad={geoLocation(setUserLocation)}>
      {pageTransitions.map(({item, props, key}) => (
        <animated.div key={key} style={props}>
            <LocationContext.Provider value={locationProvider}>
                <Suspense fallback={<h1>Restaurants loading...</h1>}>
                  <Switch location={item}>
                    <Route path="/" exact component={Landing} />
                    <Route path="/results" component={Results} />
                    <Route path="/restaurant" component={Restaurant} />
                  </Switch>
                </Suspense>
            </LocationContext.Provider>
        </animated.div>
      ))}
    </div>
  );
};

export default withRouter(App);

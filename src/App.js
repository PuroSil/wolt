import React, { useEffect,  useState, Suspense, lazy, useMemo } from 'react';
import { withRouter, Switch, Route, useLocation } from 'react-router-dom';
import { config, useTransition, animated } from 'react-spring';
import axios from 'axios';
import lodash from 'lodash';
import Landing from './pages/landing/landing';
import './app.css';
import { RestaurantContext } from './context/restaurantContext';
import { LocationContext } from './context/locationContext';
import { NearbyContext } from './context/nearbyContext';
// The restaurant listing loads a large amount of images and data which might slow
// the rendering of pages down which why lazy loading to ease things a bit 
const Results = lazy(() => import('./pages/results/results'));

const App = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [userLocation, setUserLocation] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [close, setClose] = useState(false);

  const location = useLocation()
  const nearbyProvider = useMemo(() => ({ close, setClose }), [close, setClose]);
  const restaurantProvider = useMemo(() => ({ restaurantsList, setRestaurantsList }), [restaurantsList, setRestaurantsList]);
  const locationProvider = useMemo(() => ({ userLocation, setUserLocation }), [userLocation, setUserLocation]);

  // We ask the user to share us their position coordinates so we can calculate
  // the price of delivery for the UI
  const geoLocation = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(position);
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
  }

  const position = (position) => {
    setUserLocation([...userLocation, position.coords.longitude, position.coords.latitude]);
  }

  // Fetch the restaurant data from the MongoDB database and in the end, use a cleanup function
  // to ensure no memory leaks happen etc.
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getAllRestaurants', { cancelToken: source.token });
          setRestaurantsList(lodash.sortBy(response.data, ['name']));
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Fetch cancelled.");
        } else {
          throw error;
        }
      };
    };
    fetchData();
    return () => {
      source.cancel();
    };
  }, []);

  // React Spring animation settings
  const pageTransitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },
    config: config.slow
  });

  return (
    <div className="app" onLoad={geoLocation}>
      {pageTransitions.map(({item, props, key}) => (
          <animated.div key={key} style={props}>
            <NearbyContext.Provider value={nearbyProvider}>
            <LocationContext.Provider value={locationProvider}>
            <RestaurantContext.Provider value={restaurantProvider}>
              <Suspense fallback={<h1>Restaurants loading...</h1>}>
                <Switch location={item}>
                  <Route path="/" exact component={Landing} />
                  <Route path="/results" component={Results} />
                </Switch>
              </Suspense>
            </RestaurantContext.Provider>
            </LocationContext.Provider>
            </NearbyContext.Provider>
          </animated.div>
      ))}
    </div>
  );
};

export default withRouter(App);

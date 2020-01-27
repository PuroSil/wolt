import React, { useEffect,  useState, Suspense, lazy, useMemo } from 'react';
import { withRouter, Switch, Route, __RouterContext, useLocation } from 'react-router-dom';
import { config, useTransition, animated } from 'react-spring';
import axios from 'axios';
import lodash from 'lodash';
import Landing from './pages/landing/landing';
import './app.css';
import { RestaurantContext } from './restaurantContext';
const Results = lazy(() => import('./pages/results/results'));

const App = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation()
  const providerValue = useMemo(() => ({ restaurantsList, setRestaurantsList }), [restaurantsList, setRestaurantsList]);

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
    <div className="app">
      {pageTransitions.map(({item, props, key}) => (
          <animated.div key={key} style={props}>
            <RestaurantContext.Provider value={providerValue}>
              <Suspense fallback={<h1>Restaurants loading...</h1>}>
                <Switch location={item}>
                  <Route path="/" exact component={Landing} />
                  <Route path="/results" component={Results} />
                </Switch>
              </Suspense>
            </RestaurantContext.Provider>
          </animated.div>
      ))}
    </div>
  );
};

export default withRouter(App);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import NearbyContextProvider from './context/nearbyContext';
import SelectedResContextProvider from './context/selectedResContext';
import RestaurantContextProvider from './context/restaurantContext';

ReactDOM.render(
  <HashRouter basename="/">
    <NearbyContextProvider>
      <SelectedResContextProvider>
        <RestaurantContextProvider>
          <App />
        </RestaurantContextProvider>
      </SelectedResContextProvider>
    </NearbyContextProvider>
  </HashRouter>,
  document.getElementById('root')
);

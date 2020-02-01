import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import SelectedResContextProvider from './context/selectedResContext';
import RestaurantContextProvider from './context/restaurantContext';

ReactDOM.render(
  <HashRouter basename="/">
      <SelectedResContextProvider>
        <RestaurantContextProvider>
          <App />
        </RestaurantContextProvider>
      </SelectedResContextProvider>
  </HashRouter>,
  document.getElementById('root')
);

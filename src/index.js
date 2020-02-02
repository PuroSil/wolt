import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SelectedResContextProvider from './context/selectedResContext';
import RestaurantContextProvider from './context/restaurantContext';
import { HashRouter } from 'react-router-dom';

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

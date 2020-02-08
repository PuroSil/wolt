import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SelectedResContextProvider from './context/selectedResContext';
import RestaurantContextProvider from './context/restaurantContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
      <SelectedResContextProvider>
        <RestaurantContextProvider>
          <App />
        </RestaurantContextProvider>
      </SelectedResContextProvider>
    </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import NearbyContextProvider from './context/nearbyContext';

ReactDOM.render(
  <HashRouter>
    <NearbyContextProvider>
      <App />
    </NearbyContextProvider>
  </HashRouter>,
  document.getElementById('root')
);

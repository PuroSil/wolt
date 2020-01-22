import React from 'react';
import RestaurantContainer from '../containers/restaurantContainer';
import RestaurantData from '../data/restaurantData';
import './pages.css';

const Dashboard = () => {
  return (
    <div className="page">
      <RestaurantData />
    </div>
  );
};

export default Dashboard;

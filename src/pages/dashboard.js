import React from 'react';
import RestaurantContainer from '../containers/restaurantContainer';
import RestaurantData from '../data/restaurantData';

const Dashboard = () => {
  return (
    <>
      <RestaurantContainer />
      <RestaurantData />
    </>
  );
};

export default Dashboard;

const Restaurant = require('../models/restaurantModel');

const daoGetAllRestaurants = async () => {
  const restaurants = await Restaurant.find({});
  return restaurants;
};

module.exports = {
  daoGetAllRestaurants
};
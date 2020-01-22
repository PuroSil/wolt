const Restaurant = require('../models/restaurantModel');

const daoAddRestaurant = async (restaurant) => {
  const newRestaurant = new Restaurant(restaurant);
  const savedRestaurant = await newRestaurant.save();
  return savedRestaurant;
};

const daoGetAllRestaurants = async () => {
  const restaurants = await Restaurant.find({});
  return restaurants;
};

module.exports = {
  daoAddRestaurant,
  daoGetAllRestaurants
};
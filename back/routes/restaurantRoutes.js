const router = require('express').Router();
const Restaurant = require('../models/restaurantModel');
const {
  daoAddRestaurant,
  daoGetAllRestaurants,
  daoGetRestaurantsByName
} = require('../daos/restaurantDao');

module.exports = router;

const addRestaurant = async (req, res, next) => {
  const { body } = req;
  try {
    const sentRestaurant = await daoAddRestaurant(
      body,
    );
    return res.send(sentRestaurant);
  } catch (err) {
    return next(res.send({ message: err.toString() 
    }));
  };
};

// create restaurant search that checks if paramaters included in name (includes() lodash or vanilla)
// try to make it work with dao
const getRestaurantsByName = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find({ name:{'$regex' : req.query.name, '$options' : 'i'} });
    return res.json(restaurants);
  } catch (err) {
    return next(res.send({
      message: err.toString()
    }));
  }
};

const getAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await daoGetAllRestaurants();
    return res.json(restaurants);
  } catch (err) {
    return next(res.send({
      message: err.toString()
    }));
  };
};

router.get('/getAllRestaurants', getAllRestaurants);
router.get('/getRestaurantsByName', getRestaurantsByName);
router.post('/addRestaurant', addRestaurant);

const router = require('express').Router();
const Restaurant = require('../models/restaurantModel');
const {
  daoAddRestaurant,
  daoGetAllRestaurants,
  daoGetRestaurantsByName
} = require('../daos/restaurantDao');
const { getDistance } = require('geolib');

// I had problems with Google Maps API, so this function
// is a placeholder and calculates crow's distance between
// two points to get nearby restaurants, not ideal, but at least it works
const distance = (lat1, lon1, lat2, lon2) => {
  return getDistance(
    { latitude: lat1, longitude: lon1 },
    { latitude: lat2, longitude: lon2 }
  );
};

// create restaurant search that checks if paramaters included in name (includes() lodash or vanilla)
// try to make it work with dao
const getRestaurantsByName = async (req, res, next) => {
  try {
    if (req.query.name.length > 0 && req.query.userLat !== undefined || req.query.userLon !== undefined) {
      const restaurants = await Restaurant.find({
        $or:
          [{name:{'$regex' : req.query.name, '$options' : 'i'}},
          {tags:{'$regex' : req.query.name, '$options' : 'i'}},
          {description:{'$regex' : req.query.name, '$options' : 'i'}}]
      });

      // Due to there only being 50 restaurants in the database, it is hard to come up with a distance
      // that would yield results to most searches, but that would be solved by having a proper amount
      // of restaurants. Setting it to 3 km (3000 meters) for now.
      return res.json(
        restaurants.filter(
          restaurant => distance(req.query.userLat, req.query.userLon, restaurant.location[1], restaurant.location[0]) 
          < 3000
        )
      );
    } else {
      const restaurants = await Restaurant.find({
        $or:
          [{name:{'$regex' : req.query.name, '$options' : 'i'}},
          {tags:{'$regex' : req.query.name, '$options' : 'i'}},
          {description:{'$regex' : req.query.name, '$options' : 'i'}}]
      });
      return res.json(restaurants);
    }
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

router.get('/getRestaurantsByName', getRestaurantsByName);
router.get('/getAllRestaurants', getAllRestaurants);
router.post('/addRestaurant', addRestaurant);

module.exports = router;

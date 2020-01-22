const router = require('express').Router();
const {
  daoAddRestaurant,
  daoGetAllRestaurants
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
router.post('/addRestaurant', addRestaurant);

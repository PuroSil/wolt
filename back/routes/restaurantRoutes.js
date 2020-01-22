const router = require('express').Router();
const {
  daoGetAllRestaurants
} = require('../daos/restaurantDao');

module.exports = router;

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

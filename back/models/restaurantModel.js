const mongoose = require('mongoose');

const Restaurant = new mongoose.Schema({
    blurhash: {
      required: [true, 'Blurhash is required!'],
      type: String,
      default: ''
    },
    city: {
      required: [true, 'City is required!'],
      type: String,
      default: 'Helsinki'
    },
    currency:  {
      required: [true, 'Currency is required!'],
      type: String,
      default: 'EUR'
    },
    deliveryPrice: {
      required: [true, 'Delivery price is required!'],
      minlength: [5, 'Delivery price must be at least 1 number long.'],
      type: Number,
      default: 0
    },
    description: {
      required: [false],
      type: String,
      default: ''
    },
    image: {
      required: [false],
      type: String,
      default: ''
    },
    location: [{
      required: [true, 'Location is required!'],
      type: Number,
      default: 0
    }],
    name: {
      required: [true, 'Name is required!'],
      type: String,
      default: ''
    },
    online: {
      required: [true, 'Online status is required!'],
      type: Boolean,
      default: false
    },
    tags: [{
      required: [false],
      type: String,
      default: ''
    }],
});

module.exports = mongoose.model('Restaurant', Restaurant);
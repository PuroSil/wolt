const restaurantOrder = (values, setValues, order) => {
  if(!order) {
    setValues([...values.reverse()]);
  } else {
    setValues([...values.reverse()]);
  }
}

module.exports = { restaurantOrder };

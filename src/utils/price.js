
  // Calculating a placeholder price for the UI based on distance if the user has given their location
  const price = (el, userLocation, distance) => {
    if(userLocation.length > 0) {
      return (el.deliveryPrice + Math.round(
        (distance(el.location[1], el.location[0], userLocation[1], userLocation[0]) / 100) * 100 / 100))
    } else {
      return el.deliveryPrice + 0;
    }
  }

  module.exports = { price };
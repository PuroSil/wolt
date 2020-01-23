// We ask the user to share us their position coordinates so we can calculate
// the price of delivery for the UI

const geoLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}

const position = (position) => {
  return console.log(position.coords.latitude, position.coords.longitude);
}

module.exports = { geoLocation };

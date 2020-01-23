
const geoLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}

const showPosition = (position) => {
  return console.log(position.coords.latitude, position.coords.longitude);
}

module.exports = { geoLocation };

// Test location getter for back
import { getDistance } from 'geolib';

const geoLocation = () => {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(position);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  };
};

const position = (position) => {
  setUserLocation([...userLocation, position.coords.longitude, position.coords.latitude]);
};

const distance = (lat1, lon1, lat2, lon2) => {
  return getDistance(
    { latitude: lat1, longitude: lon1 },
    { latitude: lat2, longitude: lon2 }
  );
};

module.exports = { geoLocation, position, distance };

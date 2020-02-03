  // We ask the user to share us their position coordinates so we can calculate
  // the price of delivery for the UI
  const geoLocation = (setter) => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(
        (pos) => setter([pos.coords.longitude, pos.coords.latitude]));
    } else { 
      console.log("Geolocation is not supported by this browser.");
    };
  };

  export { geoLocation };
  
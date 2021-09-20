const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiaWx5YW1hem9rIiwiYSI6ImNrdGw5c3NxdDAwYTYydXBiNHJ1dnU2MWMifQ.CeJoE_Bu4CymXKoQXOuDWw&limit=1`;
  request({ url, json: true }, (error, { body }) => {
    //console.log(error);
    if (error) {
      callback('Unable to connect to location service!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search!', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;

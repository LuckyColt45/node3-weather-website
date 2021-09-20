const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=3c8dcc20b7045512d0c125f9f7fda9d8&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location. Try another search!', undefined);
    } else {
      callback(undefined, {
        temperature: body.current.temperature,
        feelslike: body.current.feelslike
      });
    }
  });
};

module.exports = forecast;

const rp = require('request-promise');
const { WUNDERGROUND_KEY } = Meteor.settings;

const WunderAPI = {
  async getLocations(searchText) {
    const options = {
       uri: 'http://autocomplete.wunderground.com/aq',
       qs: {
         'query': searchText
       },
       json: true
     };
      
     return rp(options)
       .then(function ({ RESULTS }) {
          return RESULTS.filter((result) => result.tz !== 'MISSING');
       })
       .catch(function (err) {
         console.log('getLocations err: ', err);
       });
  },

  async getConditions(location) {
    const options = {
       uri: `http://api.wunderground.com/api/${WUNDERGROUND_KEY}/conditions/q/${location}.json`,
       json: true
     };
      
     return rp(options)
       .then(function ({ current_observation }) {

        return {
          cityName: current_observation.display_location.city,
          currentDay: current_observation.local_epoch,
          currentTemp: current_observation.temperature_string
        }
       })
       .catch(function (err) {
         console.log('getConditions err: ', err);
       });
  },
  async getForecast(location) {
    const options = {
       uri: `http://api.wunderground.com/api/${WUNDERGROUND_KEY}/forecast/q/${location}.json`,
       json: true
     };
      
     return rp(options)
       .then(function ({ forecast }) {
        const currentSimpleForecast = forecast.simpleforecast.forecastday[0];
        const currentTextForecast = forecast.txt_forecast.forecastday[0];

        return {
          expectedLow: currentSimpleForecast.low.fahrenheit,
          expectedHigh: currentSimpleForecast.high.fahrenheit,
          summary: currentTextForecast.fcttext,
          icon: currentTextForecast.icon_url
        }
       })
       .catch(function (err) {
         console.log('getForecast err: ', err);
       });
  }
}

export { WunderAPI };

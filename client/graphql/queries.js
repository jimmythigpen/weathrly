import gql from 'graphql-tag';

const getLocations = gql`
  query getLocations($searchText: String!) {
    getLocations(searchText: $searchText) {
      name
      resultString
    }
  }
`;

const currentWeather = gql`
  query currentWeather($location: String!) {
    getConditions(location: $location) {
      cityName
      currentDay
      currentTemp
    }
    getForecast(location: $location) {
      expectedLow
      expectedHigh
      summary
      icon
    }
  }
`;

export { getLocations, currentWeather };

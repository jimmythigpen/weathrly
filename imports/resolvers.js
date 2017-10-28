import { WunderAPI } from './connectors';

export const resolvers = {
  Query: {
    async getLocations(root, { searchText }, context) {
      return await WunderAPI.getLocations(searchText);
    },
    async getConditions(root, { location }, context) {
      return await WunderAPI.getConditions(location);
    },
    async getForecast(root, { location }, context) {
      return await WunderAPI.getForecast(location);
    },
  },
  Result: {
    name: ({ name }) => name,
    resultString: ({ l }) => l,
  },
};

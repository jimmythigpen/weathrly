import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = [`
  type Result {
    name: String
    resultString: String
  }

  type Conditions {
    cityName: String
    currentDay: String
    currentTemp: String
    icon: String
  }

  type Forecast {
    expectedLow: String
    expectedHigh: String
    summary: String
  }

  type Query {
    getLocations(searchText: String!): [Result]
    getConditions(location: String!): Conditions
    getForecast(location: String!): Forecast
  }
`];

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

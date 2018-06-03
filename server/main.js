import { createApolloServer } from 'meteor/apollo';
import { schema } from '/imports/schema';

createApolloServer({
  schema,
}, {
  graphiql: true,
  configServer: expressServer => expressServer.use(cors())
});

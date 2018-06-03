import { createApolloServer } from 'meteor/apollo';
import { schema } from '/imports/schema';
import cors from 'cors';

createApolloServer({
  schema,
}, {
  graphiql: true,
  configServer: expressServer => expressServer.use(cors())
});

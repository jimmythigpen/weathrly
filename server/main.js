import { createApolloServer } from 'meteor/apollo'
import { schema } from '/imports/schema'

createApolloServer({
  schema
});

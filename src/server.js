import express from 'express';
import cors from 'cors';
import {
    graphqlExpress,
    graphiqlExpress
} from 'graphql-server-express';
import bodyParser from 'body-parser';

import schema from './schema';


const PORT = 3000;
const server = express();

server.use('/graphql', cors(), bodyParser.json(), graphqlExpress(request => ({
  schema,
  context: {
    user: request.user
  }
})));

server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    query: `# Welcome to GraphiQL

query getDevices {
  data: getDevices {
    id
    thingArn
    thingName
    version
    attributes
  }
}`
}));

server.listen(PORT, () => {
    console.log(`GraphQL Server is now running on http://localhost:${PORT}/graphql`);
    console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`);
});

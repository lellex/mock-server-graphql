import express from 'express';
import cors from 'cors';
import {
    graphqlExpress,
    graphiqlExpress
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import path from 'path';

import schema from './schema';


const PORT = 3000;
const server = express();

server.use(cors())

server.use('/graphql', bodyParser.json(), graphqlExpress(request => ({
  schema,
  context: {
    user: request.user
  }
})));

server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    query: `# Welcome to GraphiQL

    query mock {
      users: getUsers {
        email,
        given_name,
        family_name,
        phone_number
      },
      devices: getDevices {
        id
        thingArn
        thingName
        version
        attributes
      },
      deviceLogs: getDeviceLogs {
        id,
        message {
          dev_eui
          payload
          request_type
        }
      }
    }
`
}));

server.use('/translations', express.static(path.join(__dirname, '/translations')));

server.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}/graphql`);
  console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`);
  console.log(``);
  console.log(`Translations are runnings on http://localhost:${PORT}/translations/{locale}`);
  console.log(`Available locales: en, fr`);
});

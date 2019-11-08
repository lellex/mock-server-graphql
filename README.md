# Kage API mock server

Forked from [graphql_authors_mock](https://github.com/JeffML/graphql_authors_mock) created by Apollo Team.

This project goal is to run a local server for mocking Kage API.

### Installation

Run these commands to install dependencies and start the server:

```bash
npm install
npm start
```

Then you can use Graphiql to test mock API at `http://localhost:3000/graphiql`.

### Usage with kage templates

Once the server is on, in `.env` file, replace the `APPSYNC_URL` variable by `localhost:3000`

For Vue template:

```
# VUE_APP_APPSYNC_URL=https://xxx.appsync-api.us-east-1.amazonaws.com/graphql
VUE_APP_APPSYNC_URL=http://localhost:3000/graphql
```

For React template:

```
# REACT_APP_APPSYNC_URL=https://xxx.appsync-api.us-east-1.amazonaws.com/graphql
REACT_APP_APPSYNC_URL=http://localhost:3000/graphql
```

### Methods

The functions `getUsers` and `getDevices` can take a `first` parameters which determine how many items we want.

```
getDevices(first: 10) // Will return 10 items
```
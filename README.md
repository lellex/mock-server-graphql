# Kage API mock server

Forked from [graphql_authors_mock](https://github.com/JeffML/graphql_authors_mock) created by Apollo Team.

This project goal is to run a local server for mocking Kage API.

### Installation

Run these commands to install dependencies and start the server:

```bash
npm install
npm start
```

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
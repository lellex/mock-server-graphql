# Posts and Authors example from graphql-tools docs

Forked from [graphql_authors_mock](https://github.com/JeffML/graphql_authors_mock) created by Apollo Team.

This project was created with [Apollo Launchpad](https://launchpad.graphql.com)

You can see the original pad at [https://launchpad.graphql.com/1jzxrj179](https://launchpad.graphql.com/1jzxrj179)

### Quick start guide

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
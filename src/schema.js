// This example demonstrates a simple server with some relational data: Posts and Authors. You can get the posts for a particular author,
// and vice-versa Read the complete docs for graphql-tools here: http://dev.apollodata.com/tools/graphql-tools/generate-schema.html

import {
    makeExecutableSchema,
    addMockFunctionsToSchema
} from 'graphql-tools';

import mocks from './mocks';

import Device from './device/components/device';
import User from './user/components/user';
import { devices } from './device/dataSource';
import { users } from './user/dataSource';

const schema = [
    `
    type Query {
        domain: String,
        getDevices(first: Int): [Device]
        getUsers(first: Int): [User]
    }
    type Mutation {
        domain: String
    }
    schema {
        query: Query,
        mutation: Mutation
    }
    `,
    Device,
    User
]

const options = {
    typeDefs: schema,
    resolvers: {
        Query: {
            getDevices: () => devices,
            getUsers: () => users,
        },
    }
}

const executableSchema = makeExecutableSchema(options);

addMockFunctionsToSchema({
    schema: executableSchema,
    mocks: mocks,
})

export default executableSchema;

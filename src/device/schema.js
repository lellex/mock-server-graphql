import Device from './components/device'

const typeDefs =
    `
  # the schema allows the following query:
  extend type Query {
    getDevices: [Device]
  }
`;

export default [typeDefs, Device];

export default `
  scalar AWSJSON

  type Device {
    id: ID!
    thingName: String
    thingArn: String
    version: Int
    attributes: String
  }
`

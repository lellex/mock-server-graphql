export default `
  type Log {
    dev_eui: String
    payload: String
    request_type: String
  }
  
  type DeviceLog {
    id: ID!
    message: Log
  }

  type Device {
    id: ID!
    thingName: String
    thingArn: String
    version: Int
    attributes: String
  }
`

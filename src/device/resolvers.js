import {
    devices
} from './dataSource';

const rootResolvers = {
    Query: {
        getDevices: () => devices
    },
};


export default rootResolvers;

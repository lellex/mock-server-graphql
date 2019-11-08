import casual from 'casual';
import { MockList } from 'graphql-tools';

export default {
    Query: () => ({
        getDevices: () => new MockList(5),
    }),
    Int: () => casual.integer(0),
    String: () => casual.uuid,
    Device: () => ({
        thingArn: `arn:aws:iot:us-east-1:458788200426:thing/${casual.integer(10000, 10000000000)}`,
        version: casual.integer(1, 2),
        attributes: JSON.stringify({
            account: casual.email,
            account_id: casual.uuid,
            activation: 'OTAA',
            app_id: casual.uuid,
            appkey: casual.random_key,
            billing_group: 'Free',
            device_type: casual.random_element([
                'Tracking',
                'Development'
            ]),
            manufacturer: casual.random_element([
                'Digital Matter',
                'Multitech',
                'Pycom',
                'Rak Wireless'
            ]),
            model: casual.random_element([
                'mDot',
                'Oyster 4G',
                'Oyster LoRaWAN'
            ]),
            name: casual.random_element([
                'Test 2',
                'Oyster 4G',
            ]),
            network: casual.random_element([
                'Test 2',
                'Oyster 4G',
                'mDot-D073'
            ])
        })
    })
}

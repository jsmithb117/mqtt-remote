import { MqttProtocol } from 'mqtt';

const protocol: MqttProtocol = 'mqtt';

export const mqttConnectionOptions = {
  port: 1884,
  clientId: `mqttjs_${Math.random().toString(16)}`,
  username: 'username',
  password: 'password',
};
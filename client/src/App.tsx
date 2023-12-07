import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import { mqttConnectionOptions } from './secrets';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Remote from './Remote';

const MqttComponent = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [client, setClient] = useState<mqtt.MqttClient | null>(null);


  useEffect(() => {
    // Connect to the MQTT server, subscribe to a topic, attach event handlers, and tear down client after unmount
    const client = mqtt.connect('mqtt://192.168.1.41', mqttConnectionOptions);
    setClient(client);

    client.on('connect', () => {
      console.log('Connected to MQTT server');
    });

    client.on('error', (err) => {
      console.error('Error connecting to MQTT server: ', err);
    });
    // Handle incoming messages
    client.on('message', (topic, receivedMessage) => {
      console.log(`Received message on topic ${topic}: ${receivedMessage.toString()}`);
      setMessage(receivedMessage.toString());
    });
    client.on('offline', () => {
      console.log('Client is offline');
    });
    client.on('reconnect', () => {
      console.log('Reconnecting to MQTT broker');
    });
    // Subscribe to the 'test-topic' topic
    client.subscribe('home/test-topic', (err) => {
      if (err) {
        console.error('Error subscribing to test-topic: ', err);
      } else {
        console.log('Subscribed to test-topic');
      }
    });
    // Clean up the MQTT connection on component unmount
    return () => {
      client.end();
    };
  }, []);

  return (
    <div>
      <Box>
        <Remote client={client}/>
      </Box>
    </div >
  );
};

export default MqttComponent;
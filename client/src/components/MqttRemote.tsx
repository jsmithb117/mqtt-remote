import { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import { mqttConnectionOptions } from '../secrets'

import CloudIcon from '@mui/icons-material/Cloud';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import CellTowerIcon from '@mui/icons-material/CellTower';

import Box from '@mui/material/Box';
import Remote from './Remote';


const IR_RECEIVER_TOPIC = 'home/living/entertainment/tv/controller/logged-in/boolean';

const MqttComponent = () => {
  const [client, setClient] = useState<mqtt.MqttClient | null>(null);
  // state variables for:
  //   - whether the mqtt client is connected
  //   - whether the ir receiver is online
  const [isConnected, setIsConnected] = useState(false);
  const [isIRReceiverOnline, setIsIRReceiverOnline] = useState(false);


  useEffect(() => {
    // Connect to the MQTT server, subscribe to a topic, attach event handlers, and tear down client after unmount

    const clientConnection = mqtt.connect('mqtt://192.168.1.41', mqttConnectionOptions);
    setClient(clientConnection);

    clientConnection.on('connect', () => {
      console.log('Connected to MQTT server');
      setIsConnected(true);
    });

    clientConnection.on('error', (err) => {
      console.error('Error connecting to MQTT server: ', err);
    });

    clientConnection.on('message', (topic, receivedMessage) => {
      // if topic is IR receiver online topic, set isIRReceiverOnline state variable
      if (topic === IR_RECEIVER_TOPIC) {
        setIsIRReceiverOnline(receivedMessage.toString() === '1');
      }
      console.log(`Received message on topic ${topic}: ${receivedMessage.toString()}`);
    });
    clientConnection.on('offline', () => {
      console.log('Client is offline');
      setIsConnected(false);
    });
    clientConnection.on('reconnect', () => {
      console.log('Reconnecting to MQTT broker');
    });
    // Subscribe to the 'test-topic' topic
    clientConnection.subscribe('home/test-topic', (err) => {
      if (err) {
        console.error('Error subscribing to test-topic: ', err);
      } else {
        console.log('Subscribed to test-topic');
      }
    });
    clientConnection.subscribe(IR_RECEIVER_TOPIC, (err) => {
      if (err) {
        console.error('Error subscribing to IR receiver topic: ', err);
      } else {
        console.log('Subscribed to IR receiver topic');
      }
    });
    clientConnection.publish('presence', '');

    return () => {
      clientConnection.end();
    };
  }, []);

  return (
    <div>
      <Box>
        <Box>
          {isConnected ? <CloudIcon /> : <CloudOffIcon />}
          {isIRReceiverOnline ? <CellTowerIcon color='success' /> : <CellTowerIcon color='disabled' />}
        </Box>
        <Remote client={client}/>
      </Box>
    </div >
  );
};

export default MqttComponent;
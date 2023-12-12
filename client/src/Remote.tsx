import mqtt from 'mqtt';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import IconButton from '@mui/material/IconButton';
import { topics } from './constants';
import Grid from '@mui/material/Grid';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import HotelIcon from '@mui/icons-material/Hotel';
import InputIcon from '@mui/icons-material/Input';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AdjustIcon from '@mui/icons-material/Adjust';


type RemoteProps = {
  client: mqtt.MqttClient | null;
}
const Remote: React.FC<RemoteProps> = ({ client }) => {
  const handlePower = () => {
    console.log('Power button clicked1');
    if (client?.connected) {
      console.log('Publishing message to topic: ', topics.power);
      client.publish(topics.power, '1');
      console.log('Published');
    }
  };
  const handleVolumeUp = () => {
    console.log('Volume Up button clicked');
    if (client?.connected) {
      console.log('Publishing message to topic: ', topics.volumeUp);
      client.publish(topics.volumeUp, '1');
      console.log('Published');
    }
  }
  const handleVolumeDown = () => {
    console.log('Volume Down button clicked');
    if (client?.connected) {
      console.log('Publishing message to topic: ', topics.volumeDown);
      client.publish(topics.volumeDown, '1');
      console.log('Published');
    }
  }
  const handleChannelUp = () => {
    console.log('Channel Up button clicked');
    if (client?.connected) {
      console.log('Publishing message to topic: ', topics.channelUp);
      client.publish(topics.channelUp, '1');
      console.log('Published');
    }
  }
  const handleChannelDown = () => {
    console.log('Channel Down button clicked');
    if (client?.connected) {
      console.log('Publishing message to topic: ', topics.channelDown);
      client.publish(topics.channelDown, '1');
      console.log('Published');
    }
  }
  const handleMute = () => {
    console.log('Mute button clicked');
    if (client?.connected) {
      console.log('Publishing message to topic: ', topics.mute);
      client.publish(topics.mute, '1');
      console.log('Published');
    }
  }
  const handleSleep = () => {
    console.log('Sleep button clicked');
    if (client?.connected) {
      console.log('Publishing message to topic: ', topics.sleep);
      client.publish(topics.sleep, '1');
      console.log('Published');
    }
  }
  const handleInput = () => {
    console.log('Input button clicked');
    if (client?.connected) {
      console.log('Publishing message to topic: ', topics.input);
      client.publish(topics.input, '1');
      console.log('Published');
    }
  }
  const handlePrevChannel = () => {
    console.log('Previous Channel button clicked');
    if (client?.connected) {
      console.log('Publishing message to topic: ', topics.previousChannel);
      client.publish(topics.previousChannel, '1');
      console.log('Published');
    }
  }
  const handleNumbers = (topic: string) => {
    console.log('One button clicked');
    if (client?.connected) {
      console.log('Publishing message to topic: ', topics[topic]);
      client.publish(topics.one, '1');
      console.log('Published');
    }
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



  return (
    <Grid>
      <Grid item xs={12}>
        <Item>
          <IconButton
            onClick={handlePower}>
            <PowerSettingsNewIcon style={{ fontSize: 100, color: "black" }} />
          </IconButton>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <IconButton onClick={handleVolumeUp}>
            <VolumeUpIcon style={{ fontSize: 100, color: "black" }} />
          </IconButton>
{/* Insert Blank space here */}
          <IconButton onClick={handleChannelUp}>
            <ArrowUpwardIcon style={{ fontSize: 100, color: "black" }} />
          </IconButton>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <IconButton onClick={handleMute}>
            <VolumeMuteIcon style={{ fontSize: 100, color: "black" }} />
          </IconButton>
          <IconButton onClick={handlePrevChannel}>
            <SkipPreviousIcon style={{ fontSize: 100, color: "black" }} />
          </IconButton>
        </Item>
      </Grid>

      <Grid item xs={12}>
        <Item>
          <IconButton onClick={handleVolumeDown}>
            <VolumeDownIcon style={{ fontSize: 100, color: "black" }} />
          </IconButton>

          <IconButton onClick={handleChannelDown}>
            <ArrowDownwardIcon style={{ fontSize: 100, color: "black" }} />
          </IconButton>
        </Item>
      </Grid>



      <Grid item xs={12}>
        <Item>
          <IconButton onClick={handleSleep}>
            <HotelIcon style={{ fontSize: 100, color: "black" }} />
          </IconButton>
          <IconButton onClick={handleInput}>
            <InputIcon style={{ fontSize: 100, color: "black" }} />
          </IconButton>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <IconButton onClick={() => { handleNumbers("one") }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 -960 960 960"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-20 200h80v-400H380v80h80v320Z" /></svg>
          </IconButton>
          <IconButton onClick={() => { handleNumbers("two") }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 -960 960 960"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320ZM360-280h240v-80H440v-80h80q33 0 56.5-23.5T600-520v-80q0-33-23.5-56.5T520-680H360v80h160v80h-80q-33 0-56.5 23.5T360-440v160Z" /></svg>
          </IconButton>
          <IconButton onClick={() => { handleNumbers("three") }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="100" width="100"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320ZM360-280h160q33 0 56.5-23.5T600-360v-60q0-26-17-43t-43-17q26 0 43-17t17-43v-60q0-33-23.5-56.5T520-680H360v80h160v80h-80v80h80v80H360v80Z" /></svg>
          </IconButton>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <IconButton onClick={() => { handleNumbers("four") }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="100" width="100"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm40 200h80v-400h-80v160h-80v-160h-80v240h160v160Z" /></svg>
          </IconButton>
          <IconButton onClick={() => { handleNumbers("five") }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="100" width="100"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320ZM360-280h160q33 0 56.5-23.5T600-360v-80q0-33-23.5-56.5T520-520h-80v-80h160v-80H360v240h160v80H360v80Z" /></svg>
          </IconButton>
          <IconButton onClick={() => { handleNumbers("six") }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="100" width="100"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-40 200h80q33 0 56.5-23.5T600-360v-80q0-33-23.5-56.5T520-520h-80v-80h120v-80H440q-33 0-56.5 23.5T360-600v240q0 33 23.5 56.5T440-280Zm0-160h80v80h-80v-80Z" /></svg>
          </IconButton>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <IconButton onClick={() => { handleNumbers("four") }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="100" width="100"><path d="M440-280h80l78-310q2-5 2-9v-9q0-29-20.5-50.5T530-680H360v80h160l-80 320Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
          </IconButton>
          <IconButton onClick={() => { handleNumbers("five") }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="100" width="100"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-40 200h80q33 0 56.5-23.5T600-360v-60q0-25-17.5-42.5T540-480q25 0 42.5-17.5T600-540v-60q0-33-23.5-56.5T520-680h-80q-33 0-56.5 23.5T360-600v60q0 25 17.5 42.5T420-480q-25 0-42.5 17.5T360-420v60q0 33 23.5 56.5T440-280Zm0-320h80v80h-80v-80Zm0 240v-80h80v80h-80Z" /></svg>
          </IconButton>
          <IconButton onClick={() => { handleNumbers("six") }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="100" width="100"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-80 200h120q33 0 56.5-23.5T600-360v-240q0-33-23.5-56.5T520-680h-80q-33 0-56.5 23.5T360-600v80q0 33 23.5 56.5T440-440h80v80H400v80Zm120-240h-80v-80h80v80Z" /></svg>
          </IconButton>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <IconButton onClick={() => { handleNumbers("decimal") }}>
            <AdjustIcon style={{ fontSize: 100, color: "black" }} />
          </IconButton>
          <IconButton onClick={() => { handleNumbers("zero") }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="100" width="100"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-40 200h80q33 0 56.5-23.5T600-360v-240q0-33-23.5-56.5T520-680h-80q-33 0-56.5 23.5T360-600v240q0 33 23.5 56.5T440-280Zm0-320h80v240h-80v-240Z" /></svg>
          </IconButton>
          <IconButton onClick={() => { handleNumbers("enter") }}>
            <KeyboardReturnIcon style={{ fontSize: 100, color: "black" }} />
          </IconButton>
        </Item>
      </Grid>
    </Grid>
  );

};


export default Remote;

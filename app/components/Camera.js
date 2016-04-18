'use strict';
import React, {
  AppRegistry,
  Component,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
  ListView,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Camera from 'react-native-camera';
import Challenge from './Challenge'
import { Actions } from 'react-native-router-flux'

class CameraApp extends Component {

  constructor(props) {
      super(props);
      this.state = { visible: false, transparent: true, animated: true, photoData: '', canTakePhoto: true };
    }

    setModalVisible(visible) {
    this.setState({visible: visible});
  }
    canTakeAPhoto() {
    this.setState({canTakePhoto: false});
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={ Actions.myChallenges } style={styles.backButton}>
            <Image source={require('../assets/backArrow.jpeg')} style={{width:40, height:33}} resizeMode={Image.resizeMode.contain} />
          </TouchableOpacity>
          <Text style={styles.headerText}>
            Take a Proof Photo
          </Text>
        </View>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          captureQuality={Camera.constants.CaptureQuality.high}
          flashMode={Camera.constants.FlashMode.auto}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableHighlight disable={this.state.canTakePhoto} activeOpacity = {0.2} underlayColor="white" style={styles.clickerFrame} onPress={()=> {
            this.takePicture()
          }}>
          <Image source={require('../assets/captureCircle.png')} style = {styles.clicker}  resizeMode={Image.resizeMode.contain} />
          </TouchableHighlight>
        </Camera>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
    .then((data) => {
      this.canTakeAPhoto()
      return this.setState({photoData: data})
    })
    .then(()=>{
      return this.props.sendPhotoToAWS(this.state.photoData, this.props.currentId)
    })
    .then(()=>{
      return this.props.toggleChallenge(this.props.currentId)
    })
    .then(()=>{
      return Actions.myChallenges()
    })
    .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  backButton: {
    marginRight: 40
  },
  headerText: {
    fontSize: 30,
    color: '#ff005f'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 5,
    margin: 5
  },
  clicker: {
    flex: 0,
    height: 50,
    width: 50,
  },
  clickerFrame: {
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 50,
    marginBottom: 10
  }
});

export default CameraApp
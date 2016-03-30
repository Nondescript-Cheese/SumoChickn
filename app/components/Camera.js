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
} from 'react-native';

import Camera from 'react-native-camera';
import Challenge from './Challenge'
import { Actions } from 'react-native-router-flux'

class CameraApp extends Component {

  constructor(props) {
      super(props);
      this.state = { visible: false, transparent: true, animated: true, photoData: '' };
    }

    setModalVisible(visible) {
    this.setState({visible: visible});
  }

  render() {

    // var modalBackgroundStyle = {
    //   backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    // };
    // var innerContainerTransparentStyle = this.state.transparent
    //   ? {backgroundColor: '#fff', padding: 20}
    //   : null;

    // let dataSource = new ListView.DataSource({
    //   rowHasChanged: (row1, row2) => row1 !== row2,
    // });

    // dataSource = dataSource.cloneWithRows(this.props.allChallenges);

    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableHighlight onPress={()=> {
            // this.setModalVisible(true)
            this.takePicture()
          }}>
          <Image source={{uri: "https://s3-us-west-1.amazonaws.com/challengrproof/circle-outline-512.png"}} style = {styles.clicker}  resizeMode={Image.resizeMode.contain} />
          </TouchableHighlight>
          <Text onPress={()=>{Actions.myChallenges()}} style={styles.capture}>
          Back
          </Text>
        </Camera>
      </View>
          // [CAPTURE]</Text>

        // <Modal
        //   animated={this.state.animated}
        //   transparent={this.state.transparent}
        //   visible={this.state.visible}>
        //   <View style={[styles.container, modalBackgroundStyle]}>
        //     <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
        //       <Text onPress={this.setModalVisible.bind(this, false)}>
        //         Back
        //       </Text>
        //       <ListView
        //         dataSource={dataSource}
        //         renderRow={(rowData) => <TouchableHighlight onPress={()=> {this.props.sendPhotoToAWS(this.state.photoData, rowData.id)}}><Text>{rowData.challengeText}</Text></TouchableHighlight>}
        //         style={styles.listView} />
        //     </View>
        //   </View>
        // </Modal>
    );
  }

  takePicture() {
    this.camera.capture()
    .then((data) => {
      console.log(data)
      console.log('THIS IS WORKED!!!!!', data)
      return this.setState({photoData: data})
    })
    .then(()=>{
      console.log("THE PROPS", this.props)
      return this.props.sendPhotoToAWS(this.state.photoData, this.props.currentId)
    })
    .then(()=>{
      console.log("INSIDE THE TOGGLIGN")
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
    padding: 5,
    margin: 10,
    height: 50,
    width: 50,
  },
});

export default CameraApp
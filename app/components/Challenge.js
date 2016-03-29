import React, {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Modal,
  Component,
  Image
} from 'react-native'

import { Actions } from 'react-native-router-flux'

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, transparent: true, animated: true, photoUrl: ""};
  }
    setModalVisible(visible) {
    this.setState({visible: visible});
  }


  render(){
    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
    var innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 20}
      : null;
    var clickChallenge;
    if(!this.props.challengesViewStatus){
      clickChallenge = <TouchableHighlight onPress={()=> {
        this.props.onClick(this.props.id)
        Actions.camera()
    }} style={styles.listItem}>
      <Text style={styles.challengeText}>
        {this.props.title}
      </Text>
    </TouchableHighlight> 
  } else {
    clickChallenge = <View><TouchableHighlight onPress={()=> {
      var getPhoto = new Promise((resolve, reject) => {
        resolve(this.props.getChallengePhoto(this.props.id))
      })
      getPhoto.then((photoUrl)=>{
        return this.setState({photoUrl: photoUrl})
      })
      .then((data)=>{
        return this.setModalVisible(true)
      })
      .catch((error)=>{
        console.log("Error in the promises", error)
      })
    }} style={styles.listItem}>
      <Text style={styles.challengeText}>
        {this.props.title}
      </Text>
    </TouchableHighlight> 
      <Modal
        animate={this.state.animated}
        transparent={this.state.transparent}
        visible={this.state.visible}>
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                <Text onPress={this.setModalVisible.bind(this, false)}>
                    Back
                </Text>
                <Image source={{uri: this.state.photoUrl}} style = {{width: 100, height: 100}} />
            </View>
          </View>
      </Modal>
    </View>
    }

  return (
    <View>
    {clickChallenge}
    </View>
  ) 
}

}


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    borderColor: 'blue',
    borderWidth: 2,
    padding: 7.5
  },
  challengeText: {
    fontSize: 30 
  }
})

export default Challenge

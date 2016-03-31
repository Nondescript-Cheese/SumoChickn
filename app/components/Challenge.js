import React, {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  Component,
  Image,
  ScrollView
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

      clickChallenge = 

        <TouchableOpacity onPress={()=> {
          this.props.onClick(this.props.id)
          Actions.camera()
        }} style={styles.listItem}>
        <Text style={styles.challengeText}>
          {this.props.title}{'\n'} <Text style={styles.minChallengeText}>sent from {this.props.createdBy.split(" ")[0]} worth {this.props.points} points</Text>
        </Text>
        </TouchableOpacity> 

    } else {

      clickChallenge =

        <View>
          <TouchableOpacity onPress={()=> {
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
          </TouchableOpacity> 
          <Modal
            animated={this.state.animated}
            transparent={this.state.transparent}
            visible={this.state.visible}>
            <ScrollView>
              <View style={[styles.container, modalBackgroundStyle]}>
                <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                  <TouchableOpacity onPress={this.setModalVisible.bind(this, false)}>
                    <Image source={{uri: 'https://s3-us-west-1.amazonaws.com/challengrproof/Drawing-layerExport+(6).jpeg'}} style={{width:25, height:25, marginBottom: 20}} resizeMode={Image.resizeMode.contain} />
                  </TouchableOpacity>
                    <Text style={styles.modalHeadline}>{this.props.title}</Text>
                    <Image source={{uri: this.state.photoUrl}} style = {{width: 350, height: 350}}  resizeMode={Image.resizeMode.contain} />
                </View>
              </View>
            </ScrollView>
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
    borderColor: 'grey',
    borderWidth: 0,
    // borderRadius: 12.5,
    padding: 7.5,
    margin: 1,
    backgroundColor: "#a9a9a9"
  },
  challengeText: {
    fontSize: 25,
    color: 'white' 
  },
  minChallengeText: {
    fontSize: 15,
    color: 'white' 
  },
  modalHeadline: {
    fontSize: 44,
  },
  innerContainer: {
    alignItems: 'center',
  }
})

export default Challenge

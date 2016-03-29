import React, {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Modal,
  Component
} from 'react-native'

import { Actions } from 'react-native-router-flux'

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, transparent: true, animated: true};
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
      this.setModalVisible(true)
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
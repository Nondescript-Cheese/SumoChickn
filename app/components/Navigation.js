import React, {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Component
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const Navigation = ({navPress}) => {
  return (
    <View style={styles.toolbar}>
      <TouchableHighlight style={styles.button} onPress={() => navPress('testPage')}><Text>TestPage</Text></TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={() => navPress('createChallenge')}><Text>Send{'\n'}Challenge</Text></TouchableHighlight>
    </View>
  )
}

var styles = StyleSheet.create({
  toolbar:{
    backgroundColor:'#81c04d',
    paddingTop:30,
    paddingBottom:10,
    justifyContent: 'space-around',
    flexDirection:'row'    
  },
  // toolbarTitle:{
  //   color:'#fff',
  //   borderColor: 'black',
  //   borderWidth: 2,
  //   textAlign:'center',
  //   fontWeight:'bold',
  //   flex:1
  // }
  button: {
     borderWidth: 2,
     height: 100,
     width: 100,
     borderRadius: 50,
     justifyContent: 'center',
     alignItems: 'center',
   }
});

export default Navigation

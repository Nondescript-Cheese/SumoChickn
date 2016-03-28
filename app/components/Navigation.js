import React, {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Component
} from 'react-native';

const Navigation = ({navPress}) => {
  return (
    <View style={styles.toolbar}>
      <TouchableHighlight style={styles.button} onPress={() => navPress('signUp')}><Text>SignUp</Text></TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={() => navPress('myChallenges')}><Text>myChallenges</Text></TouchableHighlight>
    </View>
  )
}

var styles = StyleSheet.create({
  toolbar:{
    backgroundColor:'#81c04d',
    paddingTop:4,
    paddingBottom:4,
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
     height: 50,
     width: 100,
     borderRadius: 50,
     justifyContent: 'center',
     alignItems: 'center',
   }
});

export default Navigation

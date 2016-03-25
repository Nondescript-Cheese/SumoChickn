import React, {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from 'react-native'

import FBLogin from 'react-native-facebook-login'

let FBLoginManager = require('NativeModules').FBLoginManager;

const Signup = ({ getCurrentUser }) => (
  <View style = {styles.container} >
    <View style= {styles.header}>
      <Text>Signup/Login</Text>
    </View>
    <View style = {styles.facebook}>
      <FBLogin
      permissions={['email','user_friends','public_profile']}
      loginBehavior={FBLoginManager.LoginBehaviors.Native}
      onLogin={(data) => getCurrentUser(data.credentials.token, data.credentials.userId)}
      onLoginFound={(data) => getCurrentUser(data.credentials.token, data.credentials.userId)}
      style={styles.space}/>

    </View>
    <View style = {styles.space}>
    </View>
  </View>
  )

var styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'grey',
    borderWidth: 3
  },
  header: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 3
  },
  form: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 3
  },
  input: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'green',
    borderWidth: 3
  },
  space: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3
  },
  facebook: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

//https://graph.facebook.com/v2.3/${user.userId}?fields=name,email&access_token=${user.token}

export default Signup
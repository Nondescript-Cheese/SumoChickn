import React, {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Image
} from 'react-native'

import FBLogin from 'react-native-facebook-login'

let FBLoginManager = require('NativeModules').FBLoginManager;

const Signup = ({ getCurrentUser }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={{fontSize: 40}}>Login</Text>
    </View>
    <View style={styles.logoHolder}>
      <Image
        style={{
          width: 275,
          height: 275,
          resizeMode: 'contain'
        }}
        source={require('../assets/landingPageLogo.png')} />
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
  },
  header: {
    marginTop: 20,
    alignItems: 'center'
  },
  logoHolder: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  facebook: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10
  }
})

//https://graph.facebook.com/v2.3/${user.userId}?fields=name,email&access_token=${user.token}

export default Signup
import React, {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from 'react-native'

const formObj = {
  username: ''
}

const Signup = ({ getCurrentUser }) => (
  <View style = {styles.container} >
    <View style= {styles.header}>
      <Text>Signup/Login</Text>
    </View>
    <View style = {styles.form}>
      <TextInput style = {styles.input} multiline={false} onChangeText = {(text) => {
        formObj.username = text}
      }/>
    </View>
    <View style = {styles.space}>
      <Text>Welcome to Challengr, login or signup to start playing!</Text>
    </View>
    <TouchableHighlight style={styles.form} onPress={() => getCurrentUser(formObj.username)}>
      <Text>CLICK HERE TO SIGN UP ONE DAY</Text>
    </TouchableHighlight>
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
  }
})

export default Signup
import React, {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'

const Signup = () => (
  <View style = {styles.container} >
    <View style= {styles.header}>
      <Text>Signup/Login</Text>
    </View>
    <View style = {styles.form}>
      <TextInput style = {styles.input} multiline={false} />
    </View>
    <View style = {styles.space}>
      <Text>Welcome to Challengr, login or signup to start playing!</Text>
    </View>
    <View style = {styles.form}>
      <Text>CLICK TO SIGN UP ONE DAY</Text>
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
  }
})

export default Signup
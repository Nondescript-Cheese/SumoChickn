import React, { 
  View,
  Text,
  ListView,
  TextInput,
  StyleSheet, 
  PropTypes,
  TouchableHighlight
} from 'react-native'

const DropDown = require('react-native-dropdown');
const Button = require('react-native-button');

const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;


const CreateChallenges = () => {
  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>
          Create Challenge
        </Text>
      </View>

      <View style={styles.body}>

        <View style={[styles.title, styles.border]}>
          <Text style={styles.bodyTitle}>
            Title
          </Text>
          <TextInput style={styles.bodyInput} />
        </View>

        <View style={[styles.border, styles.description]}>
          <Text style={styles.bodyTitle}>
            Description
          </Text>
          <TextInput multiline={true} style={styles.bodyDescription} />
        </View>

        <View style={styles.choose}>

          <View style={styles.inline}>
            <Text>
              Points:
            </Text>
              <Select width={75}>
                <Option>1</Option>
                <Option>2</Option>
                <Option>3</Option>
            </Select>
          </View>

          <View style={styles.inline}>
            <Text>
              Choose Person:
            </Text>
              <Select width={75}>
                <Option>Michael</Option>
                <Option>Steffen</Option>
                <Option>Hamzah</Option>
            </Select>
          </View>
        </View>

      </View>

      <View style={styles.sub}>
        <Button style={styles.buttonWrap}>
          <Text>SEND CHALLENGE</Text>
        </Button>
      </View>

    </View>
  )
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.1,
    borderColor: "red",
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 0.6,
    borderColor: "yellow",
    borderWidth: 4
  },
  sub: {
    flex: 0.1,
    borderColor: "green",
    borderWidth: 4
  },
  headerText: {
    fontSize: 30
  },
  bodyTitle: {
    fontSize: 20,
  },
  bodyInput: {
    flex: 1,
    borderColor: "brown",
    borderWidth: 4,
  },
  bodyDescription: {
    flex: 1,
    fontSize: 25,
    borderColor: "brown",
    borderWidth: 4
  },
  choose: {
    borderColor: "orange",
    borderWidth: 4,
    flex: 0.3
  },
  title: {
    flex: 0.1,
    marginBottom: 5
  },
  description: {
    flex: 0.5
  },
  border: {
    borderColor: "black",
    borderWidth: 4
  },
  inline: {
    flexDirection: "row",
    flex: 1
  },
  buttonWrap: {
    flex:1
  }
})

export default CreateChallenges
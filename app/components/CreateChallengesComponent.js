import React, {
  Component, 
  View,
  Text,
  ListView,
  TextInput,
  StyleSheet,
  ScrollView, 
  PropTypes,
  PickerIOS,
  Alert,
  TouchableHighlight
} from 'react-native'

import { Actions } from 'react-native-router-flux';

const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;

var PickerItemIOS = PickerIOS.Item;

const Button = require('react-native-button');

const formValue = {

  description: "",
  assignedTo: undefined,
  createdBy: "",
  points: 0
}

class CreateChallenges extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   description: "",
    //   assignedTo: "",
    //   points: 1,
    // }
  }

  componentDidMount() {
      updatePosition(this.refs['SELECT1']);
      updatePosition(this.refs['SELECT2'])
      updatePosition(this.refs['OPTIONLIST']);
    }

    _getOptionList() {
      return this.refs['OPTIONLIST'];
    }

    _points(selectedPoints) {
      // this.setState({
      //   points: selectedPoints
      // })
      formValue.points = selectedPoints;
    }
    _friend (selectedFriend) {
      // this.setState({
      //   assignedTo: selectedFriend
      // })
      formValue.assignedTo = selectedFriend;
    }

  render () {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableHighlight onPress={Actions.myChallenges} style={styles.backButton}>
            <Text>back</Text>
          </TouchableHighlight>
          <Text style={styles.headerText}>
            Create Challenge
          </Text>
        </View>

        <View style={styles.body}>

          <View style={[styles.border, styles.description]}>
            <Text style={styles.bodyTitle}>
              Challenge Description
            </Text>
            <TextInput multiline={true} style={styles.bodyDescription} onChangeText = {(text) => {
              // this.setState({description: text})
              formValue.description = text
              formValue.createdBy = this.props.currentUser 
            }
            } />
          </View>

          <View style={styles.choose}>
            <Select width={100}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Points"
            onSelect={this._points.bind(this)}>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
            <Option>6</Option>
            </Select>
            <OptionList ref="OPTIONLIST"/>

            <Select width={130}
            ref="SELECT2"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Friends"
            onSelect={this._friend.bind(this)}>
            {this.props.friends.map((friend)=>(
            <Option key = {friend}>{friend}</Option>))}
            </Select>
            <OptionList ref="OPTIONLIST"/>
          </View>

        </View>
        <View style={styles.sub}>
          <TouchableHighlight style={styles.buttonWrap} onPress ={()=>
            Alert.alert("Challenge " + formValue.assignedTo + "!!", "Are you ready to send your " + formValue.points + " point challenge to " + formValue.assignedTo + "?",             [
              {text: 'Send It Baby', onPress: () => this.props.sendChallenge(formValue)},
              {text: 'Cancel', onPress: () => console.log("User cancelled")}
            ])
          }>
            <Text style={styles.textBox}>SEND CHALLENGE</Text>
          </TouchableHighlight>
        </View>


      </View>
    )
  }
}

        
          // <View style={[styles.title, styles.border]}>
          //   <Text style={styles.bodyTitle}>
          //     Title
          //   </Text>
          //   <TextInput style={styles.bodyInput} onChangeText = {(text) => {this.setState({title: text})
          //     formValue.title = text}
          // } />
          // </View>

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
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
  backButton: {
    borderColor: "purple",
    borderWidth: 2,
    marginRight: 15
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
    flex: 0.3,
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  title: {
    flex: 0.1,
    marginBottom: 5
  },
  description: {
    flex: 0.3
  },
  border: {
    borderColor: "black",
    borderWidth: 4
  },
  buttonWrap: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBox: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CreateChallenges
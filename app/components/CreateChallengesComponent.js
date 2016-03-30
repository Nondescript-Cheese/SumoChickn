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
  TouchableOpacity,
  Vibration,
  Image
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

const validate = () => {
  if(formValue.description === "" || formValue.assignedTo === undefined || formValue.points === 0) {
    return false;
  }
  return true;
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
          <TouchableOpacity onPress={Actions.myChallenges} style={styles.backButton}>
            <Image source={{uri: 'https://s3-us-west-1.amazonaws.com/challengrproof/Drawing-layerExport+(1).jpeg'}} style={{width:50, height:50}} resizeMode={Image.resizeMode.contain} />
          </TouchableOpacity>
          <Text style={styles.headerText}>
            Create Challenge
          </Text>
        </View>

        <View style={styles.body}>

          <View style={[styles.border, styles.description]}>
            <Text style={styles.bodyTitle}>
              Challenge Description
            </Text>
            <TextInput placeholder="enter your challenge here" keyboardAppearance = "dark" blurOnSubmit={true} returnKeyType="next" multiline={true} style={styles.bodyDescription} onChangeText = {(text) => {
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
          <TouchableOpacity style={styles.buttonWrap} onPress ={()=> {
            if(validate()) {
              Alert.alert("Challenge " + formValue.assignedTo + "!!", "Are you ready to send your " + formValue.points + " point challenge to " + formValue.assignedTo + "?",             [
                {text: 'Send It Baby', onPress: () => {this.props.sendChallenge(formValue)
                  Vibration.vibrate()}},
                {text: 'Cancel', onPress: () => console.log("User cancelled")}
              ])
            } else {
              Alert.alert('Make sure all fields are completed before sending a challenge.')
            }
          }}>
            <Text style={styles.textBox}>SEND CHALLENGE</Text>
          </TouchableOpacity>
        </View>


      </View>
    )
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  header: {
    flexDirection: 'row',
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 30,
    color: '#ff005f'
  },
  backButton: {
    marginRight: 40
  },
  bodyTitle: {
    fontSize: 20,
    backgroundColor: '#fffaf0',
    padding: 5
  },
  bodyInput: {
    flex: 1,
  },
  bodyDescription: {
    flex: 1,
    fontSize: 25,
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
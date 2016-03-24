import { connect } from 'react-redux'
import CreateChallenges from '../components/CreateChallengesComponent'
import { bindActionCreators } from 'redux'
import { SendChallenge } from '../actions'

const nameFilter = (array) => {
  var result = [];
  for(var i=0; i<array.length; i++) {
    result.push(array[i].username)
  }
  return result;
}

const mapStateToProps = (state) => {
  return {
    friends: nameFilter(state.allUsers.usersList),
    currentUser: state.currentUser.userDetails[0].username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendChallenge: bindActionCreators(SendChallenge, dispatch)
  }
}


const SendChallenges = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChallenges)


//TODO: UPDATE IN APP.JS
export default SendChallenges
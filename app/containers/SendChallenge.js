import { connect } from 'react-redux'
import CreateChallenges from '../components/CreateChallengesComponent'
import { bindActionCreators } from 'redux'
import { SendChallenge } from '../actions'

const nameFilter = (array, user) => {
  var result = [];
  for(var i=0; i<array.length; i++) {
    if (array[i].username !== user) {
      result.push(array[i].username)
    }
  }
  return result;
}

const mapStateToProps = (state) => {
  return {
    friends: nameFilter(state.allUsers.usersList, state.currentUser.userDetails[0].username ),
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


export default SendChallenges
import { connect } from 'react-redux'
import CreateChallenges from '../components/CreateChallengesComponent'
import { bindActionCreators } from 'redux'
import { SendChallenge } from '../actions'

const mapStateToProps = (state) => {
  return {
    friends: ["Mike", "duke", "steffen", "hamzah"]
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
import { connect } from 'react-redux'
import CreateChallenges from '../components/CreateChallengesComponent'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}


const SendChallenge = connect(
  mapStateToProps,
  mapDispatchToProps
  )(CreateChallenges)


//TODO: UPDATE IN APP.JS
export default SendChallenge
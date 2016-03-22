import { connect } from 'react-redux'
import MyChallenges from '../components/MyChallengesComponent.js'

const mapStateToProps = (state) => {
  return {
    visibleChallenges: state.challenges.challengeList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
const ChallengeList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(MyChallenges)

export default ChallengeList
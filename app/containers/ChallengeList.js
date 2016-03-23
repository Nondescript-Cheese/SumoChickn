import { connect } from 'react-redux'
import MyChallenges from '../components/MyChallengesComponent.js'
import { setChallengesViewStatus } from '../actions'
import { bindActionCreators } from 'redux'

const filterView = (challenges, challengesViewStatus) => {
  switch (challengesViewStatus) {
    case true :
      return challenges.filter(c => c.completed)
    case false:
      return challenges.filter(c=> !c.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    visibleChallenges: filterView(state.challenges.challengeList, state.challengesViewStatus),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: bindActionCreators(setChallengesViewStatus, dispatch)
    }
  }
  //TODO: CREATE SETCHALLENGEVIEWSTATUS ACTION IN ACTION TYPES AND IN REDUCERS!!

const ChallengeList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(MyChallenges)

export default ChallengeList
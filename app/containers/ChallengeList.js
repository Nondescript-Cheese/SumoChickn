import { connect } from 'react-redux'
import MyChallenges from '../components/MyChallengesComponent.js'
import { setChallengesViewStatus } from '../actions'
import { toggleChallengeStatus } from '../actions/toggleChallengeStatus'
import { fetchAllUsers } from '../actions/fetchUsers'
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
    allUserData: state.allUsers.usersList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: bindActionCreators(setChallengesViewStatus, dispatch),
    toggleChallenge: bindActionCreators(toggleChallengeStatus, dispatch),
    fetchAllUserData: bindActionCreators(fetchAllUsers, dispatch)
    }
  }
  //TODO: CREATE SETCHALLENGEVIEWSTATUS ACTION IN ACTION TYPES AND IN REDUCERS!!

const ChallengeList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(MyChallenges)

export default ChallengeList
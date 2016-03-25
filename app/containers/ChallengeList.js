import { connect } from 'react-redux'
import MyChallenges from '../components/MyChallengesComponent.js'
import { setChallengesViewStatus, getChallenges } from '../actions'
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

const checkChallenges = (array) => {
  if(array.length === 0) {
    return [{id:-1}]
  } else {
    return array
  }
}
const mapStateToProps = (state) => {
  return {
    visibleChallenges: checkChallenges(filterView(state.challenges.challengeList, state.challengesViewStatus)),
    allUserData: state.allUsers.usersList,
    refreshingChallenges: state.challenges.gettingUsersChallenges,
    currentUserId: state.currentUser.userDetails[0].id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: bindActionCreators(setChallengesViewStatus, dispatch),
    toggleChallenge: bindActionCreators(toggleChallengeStatus, dispatch),
    fetchAllUserData: bindActionCreators(fetchAllUsers, dispatch),
    getNewChallenges: bindActionCreators(getChallenges, dispatch)
    }
  }

const ChallengeList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(MyChallenges)

export default ChallengeList
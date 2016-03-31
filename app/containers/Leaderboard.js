import { connect } from 'react-redux'
import LeaderboardComponent from '../components/LeaderboardComponent.js'
import { fetchAllUsers } from '../actions/fetchUsers'
import { bindActionCreators } from 'redux'


const filterView = (challenges, challengeStatus) => {
  if(challenges.length > 0){
    switch (challengeStatus) {
      case true :
        return challenges.filter(c => c.completed)
      case false:
        return challenges.filter(c=> !c.completed)
    }
  } else {
    return false
  }
}

const checkChallenges = (array) => {
  if(array.length > 0) {
    return array
  } else {
    return false
  }
}

const filterCurrentUser = (allUsers, userId) => {
  console.log('this is all users', allUsers, 'this is the userId', userId);
  if(allUsers.length > 0){
    return allUsers.filter(function(user){return(user.id === userId)})
  } else {
    return false
  }
}

const mapStateToProps = (state) => {
  return {
    allUserData: state.allUsers.usersList,
    currentUser: state.currentUser.userDetails[0] || {username: "Peter", id: 23},
    updatingLeaderboard: state.allUsers.fetchingAllUsers,
    closedChallenges: checkChallenges(filterView(state.challenges.challengeList, true)),
    openChallenges: checkChallenges(filterView(state.challenges.challengeList, false)),
    currentUserData: filterCurrentUser(state.allUsers.usersList, state.currentUser.userDetails[0].id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLeaderboard: bindActionCreators(fetchAllUsers, dispatch)
  }
}

const Leaderboard = connect(
  mapStateToProps,
  mapDispatchToProps
  )(LeaderboardComponent)

export default Leaderboard
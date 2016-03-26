import { connect } from 'react-redux'
import LeaderboardComponent from '../components/LeaderboardComponent.js'
import { fetchAllUsers } from '../actions/fetchUsers'
import { bindActionCreators } from 'redux'


const mapStateToProps = (state) => {
  return {
    allUserData: state.allUsers.usersList,
    currentUser: state.currentUser.userDetails[0] || {username: "Peter", id: 23},
    updatingLeaderboard: state.allUsers.fetchingAllUsers
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
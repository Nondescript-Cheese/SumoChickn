import { connect } from 'react-redux'
import LeaderboardComponent from '../components/LeaderboardComponent.js'


const mapStateToProps = (state) => {
  return {
    allUserData: state.allUsers.usersList,
    currentUser: state.currentUser.userDetails[0].username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const Leaderboard = connect(
  mapStateToProps,
  mapDispatchToProps
  )(LeaderboardComponent)

export default Leaderboard
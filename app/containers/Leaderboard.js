import { connect } from 'react-redux'
import LeaderboardComponent from '../components/LeaderboardComponent.js'


const mapStateToProps = (state) => {
  return {
    allUserData: state.allUsers.usersList
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
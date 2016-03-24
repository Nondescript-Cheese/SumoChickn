import { connect } from 'react-redux'
import Leaderboard from '../components/Leaderboard.js'


const mapStateToProps = (state) => {
  return {
    allUserData: state.allUsers.usersList
  }
}

const mapDispatchToProps = (dispatch) => {

}

const Leaderboard = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Leaderboard)

export default Leaderboard
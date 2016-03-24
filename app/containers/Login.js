import { connect } from 'react-redux'
import Signup from '../components/Signup'
import { getUserDispatcher } from '../actions/fetchUserDetails.js'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {
    currentUser: state.userDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: bindActionCreators(getUserDispatcher, dispatch)
  }
}

const LoginAuth = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)

export default LoginAuth
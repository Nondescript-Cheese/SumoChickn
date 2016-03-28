import Immutable from 'immutable'
import { GOT_USER, GETTING_USER } from '../actions/fetchUserDetails'


const currentUser = (state = {userDetails: [], gettingUser: false}, action) => {
  switch(action.type) {
    case GETTING_USER:
      return Object.assign({}, state, {
        gettingUser: true
    })
    case GOT_USER:
      
      return Object.assign({}, state, {
        gettingUser: false,
        userDetails: state.userDetails = [action.user]
    })
    default:
      return state
  }
}


export default currentUser
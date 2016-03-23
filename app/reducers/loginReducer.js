import Immutable from 'immutable'
import { GOT_USER, GETTING_USER } from '../actions/fetchUserDetails'


const loginCheck = (state = {currentUser: [], gettingUser: false}, action) => {
  switch(action.type) {
    case GETTING_USER:
      return Object.assign({}, state, {
        gettingUser: true
    })
    case GOT_USER:
      return Object.assign({}, state, {
        gettingUser: false,
        currentUser: currentUser.concat(action.user)
    })
    default:
      return state
  }
}


export default loginCheck
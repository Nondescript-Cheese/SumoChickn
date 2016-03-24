import Immutable from 'immutable'
import currentUser from './loginReducer.js'
import { combineReducers } from 'redux'
import { CHALLENGE_POSTING, CHALLENGE_POSTED, CHANGE_CHALLENGES_VIEW } from '../actions'
import { TOGGLED_CHALLENGE } from '../actions/toggleChallengeStatus'

//this is a place holder to allow app to render.
const challenge = (state, action) => {
  console.log('this is the action:', action)
  switch(action.type) {
    case CHALLENGE_POSTED:
      return {
        id: action.challenge.id,
        challengeText: action.challenge.text,
        points: action.challenge.points,
        createdBy: action.challenge.createdBy,
        id_tribe: action.challenge.id_tribe,
        userChallenged: action.challenge.id_user,
        completed: false
      }
    case TOGGLED_CHALLENGE:
      console.log('in solo challenge')
      if(state.id !== action.id) {
        return state
      }
      console.log('in the found case')
      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

//FAKE DATA TO TEST REDUX-STORE
const challenges = (state = {challengeList: [{
    id: 1,
    challengeText: 'Do 45 pushups non stop',
    points: 4,
    createBy: 'Aladdin',
    userChallenged: 3,
    completed: false
  },
  {
    id: 2,
    challengeText: "Don't get in trouble",
    points: 5,
    createBy: 'TechnoViking',
    userChallenged: 1,
    completed: true
  },
  {
    id: 3,
    challengeText: 'Eat a cockroach from the TL floors',
    points: 100,
    createBy: 'Mike "The Professional" 2.0',
    userChallenged: 2,
    completed: false
  }], postingChallenge: false, challengeStatusChanging: false} , action) => {
  switch(action.type) {
    case CHALLENGE_POSTING:
      return Object.assign({}, state, {
        postingChallenge: true
      })
    case CHALLENGE_POSTED:
      return Object.assign({}, state, {
        postingChallenge: false,
        challengeList: state.challengeList.concat([challenge(undefined, action)]) 
      })
    case TOGGLED_CHALLENGE:
      return Object.assign({}, state, {
        challengeList: state.challengeList.map((t) => challenge(t, action))
      })
    default:
      return state
  }
}

const challengesViewStatus = (state = false, action) => {
  switch(action.type) {
    case CHANGE_CHALLENGES_VIEW:
      return action.challengesView
    default:
      return state
  }
}
// TODO LATER
// const allUsers = (state = [], action) => {
//   switch(action.type){
//     case ADDING_USERS: 
//       return state.concat(action.userList)
//     default: 
//       return state
//   }
// }

const challengeApp = combineReducers({
  challenges,
  challengesViewStatus,
  currentUser
  // allUsers
})

export default challengeApp


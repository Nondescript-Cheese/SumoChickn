import Immutable from 'immutable'
import currentUser from './loginReducer.js'
import { combineReducers } from 'redux'
import { CAMERA_CHALLENGE_ID } from '../actions/cameraActions'
import { GETTING_CLOSED_CHALLENGES, GOT_CLOSED_CHALLENGES, CHALLENGE_POSTING, CHALLENGE_POSTED, CHANGE_CHALLENGES_VIEW, GETTING_CHALLENGES, GOT_CHALLENGES, GETTING_CLOSED_CHALLENGES_VOTE, GOT_CLOSED_CHALLENGES_VOTE } from '../actions'
import { TOGGLING_CHALLENGE, TOGGLED_CHALLENGE } from '../actions/toggleChallengeStatus'
import { FETCHING_USERS, FETCHED_USERS} from '../actions/fetchUsers'

//this is a place holder to allow app to render.
const challenge = (state, action) => {
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
      if(state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

const challenges = (state = {challengeList: [], postingChallenge: false, challengeStatusChanging: false, gettingUsersChallenges: false, gettingClosedChallenges: false, gettingClosedChallengesVote: false, closedChallengesList: []} , action) => {
  switch(action.type) {
    case CHALLENGE_POSTING:
      return Object.assign({}, state, {
        postingChallenge: true
      })
    case CHALLENGE_POSTED:
      return Object.assign({}, state, {
        postingChallenge: false,
      })
    case TOGGLING_CHALLENGE:
      return Object.assign({}, state, {
        challengeStatusChanging: true
      })
    case TOGGLED_CHALLENGE:
      return Object.assign({}, state, {
        challengeStatusChanging: false,
        challengeList: state.challengeList.map((t) => challenge(t, action)),
      })
    case GETTING_CHALLENGES:
      return Object.assign({}, state, {
        gettingUsersChallenges: true
      })
    case GOT_CHALLENGES:
      return Object.assign({}, state, {
        gettingUsersChallenges: false,
        challengeList: action.challenges
      })
    case CAMERA_CHALLENGE_ID:
      return Object.assign({}, state, {
        currentChallengeID: action.id
      })
    case GETTING_CLOSED_CHALLENGES:
      return Object.assign({}, state, {
        gettingClosedChallenges: true
      })
    case GOT_CLOSED_CHALLENGES:
      return Object.assign({}, state, {
        gettingClosedChallenges: false,
        closedChallengesList: action.challenges
      })
    case GETTING_CLOSED_CHALLENGES_VOTE:
      return Object.assign({}, state, {
        gettingClosedChallengesVote: true
      })
    case GOT_CLOSED_CHALLENGES_VOTE:
      return Object.assign({}, state, {
        gettingClosedChallengesVote: false,
        closedChallengesList: action.challenges
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

const allUsers = (state = {usersList: [], fetchingAllUsers: false}, action) => {
  switch(action.type){
    case FETCHING_USERS: 
      return Object.assign({}, state, {
        fetchingAllUsers: true
      })
    case FETCHED_USERS:
      return Object.assign({}, state, {
        fetchingAllUsers: false,
        usersList: action.payload
      })
    default: 
      return state
  }
}

const challengeApp = combineReducers({
  challenges,
  challengesViewStatus,
  currentUser,
  allUsers
})

export default challengeApp


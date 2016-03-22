import Immutable from 'immutable'
import { combineReducers } from 'redux'
import { CHALLENGE_POSTING, CHALLENGE_POSTED } from '../actions'

//this is a place holder to allow app to render.

const postingChallenge = (state = false, action) => {
  switch(action.type) {
    case CHALLENGE_POSTING:
      return true
    case CHALLENGE_POSTED:
      return false
    default:
      return state
  }
}

const challenges = (state = [], action) => {
  return state
}




const challengeApp = combineReducers({
  postingChallenge,
  challenges
})

export default challengeApp


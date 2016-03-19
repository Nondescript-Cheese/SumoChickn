import Immutable from 'immutable'
import { combineReducers } from 'redux'

//this is a place holder to allow app to render.
const challenges = (state = [], action) => {
  return state
}

const challengeApp = combineReducers({
  challenges
})

export default challengeApp


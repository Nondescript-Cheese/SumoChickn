export const GETTING_USER = 'GETTING_USER'
export const GOT_USER = 'GOT_USER'
import { getChallenges } from './index'

export const gettingUser = (user) => {
  return {
    type: GETTING_USER,
    user
  }
}

export const gotUser = (user) => {
  return {
    type: GOT_USER,
    user
  }
}

export const getUserDispatcher = (user) => {
  return dispatch => {
    dispatch(gettingUser(user))

    let currentUser = {
      username: user
    }

    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentUser)
    })
    .then((data) => {
      return data.json()
    })
    .then((myBlob) => {
      let userInfo = {
        id: myBlob.id,
        username: myBlob.username
      }
      dispatch(gotUser(userInfo))
      return userInfo
    })
    .then((userInfo) => {
      dispatch(getChallenges(userInfo.id))
    })
    .catch((error) => {
      console.warn(error)
    })
  } 
}
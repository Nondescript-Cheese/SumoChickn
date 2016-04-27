export const FETCHING_USERS = 'FETCHING_USERS'
export const FETCHED_USERS = 'FETCHED_USERS'

import keys from '../utils/envs'

export const fetchingAllUsers = () => {
  return {
    type: FETCHING_USERS
  }
}

export const fetchedAllUsers = (users) => {
  return {
    type: FETCHED_USERS,
    payload: users
  }
}

export const fetchAllUsers = () => {
  return dispatch => {
  	dispatch(fetchingAllUsers());
  	return fetch(keys.url+'getAllUsers/')
    .then((response) => {
      return response.json();
    })
    .then((newUsersData) => {
      newUsersData = newUsersData.sort((a,b)=>{return (b.beastPoints - b.wussPoints)  - (a.beastPoints - a.wussPoints)})
      dispatch(fetchedAllUsers(newUsersData));
    })
    .catch((error) => {
      console.warn(error);
    })
  }
}

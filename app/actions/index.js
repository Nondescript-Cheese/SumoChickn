export const CHALLENGE_POSTING = 'CHALLENGE_POSTING'
export const CHALLENGE_POSTED = 'CHALLENGE_POSTED'
export const CHANGE_CHALLENGES_VIEW = 'CHANGE_CHALLENGES_VIEW'
export const GETTING_CHALLENGES = 'GETTING_CHALLENGES'
export const GOT_CHALLENGES = 'GOT_CHALLENGES'
export const GETTING_CLOSED_CHALLENGES = 'GETTING_CLOSED_CHALLENGES'
export const GOT_CLOSED_CHALLENGES = 'GOT_CLOSED_CHALLENGES'
export const GETTING_CLOSED_CHALLENGES_VOTE = 'GETTING_CLOSED_CHALLENGES_VOTE'
export const GOT_CLOSED_CHALLENGES_VOTE = 'GOT_CLOSED_CHALLENGES_VOTE'

import keys from '../utils/envs'
import { Actions } from 'react-native-router-flux';

//--------------------------------------

export const gettingClosedChallenges = (fromNo, toNo) => {
  return {
    type: GETTING_CLOSED_CHALLENGES,
    payload: [fromNo, toNo],
  }
}

export const gotClosedChallenges = (challenges) => {
  return {
    type: GOT_CLOSED_CHALLENGES,
    challenges: challenges,
  }
}

export const getClosedChallenges = (fromNo, toNo) => {
  return dispatch => {
    dispatch(gettingClosedChallenges(fromNo, toNo))
    console.log('gettingClosedChallenges', fromNo, toNo);

    return fetch(keys.url+'getClosedChallenges/'+fromNo+'/'+toNo)
    .then((response)=>{
      return response.json()
    })
    .then((closedChallengeList)=>{
      dispatch(gotClosedChallenges(closedChallengeList))
    })
    .catch((error)=>{
      console.warn(error)
    })
  }
}

export const gettingClosedChallengesVote = (fromNo, toNo) => {
  return {
    type: GETTING_CLOSED_CHALLENGES_VOTE,
    payload: [fromNo, toNo],
  }
}

export const gotClosedChallengesVote = (challenges) => {
  return {
    type: GOT_CLOSED_CHALLENGES_VOTE,
    challenges: challenges,
  }
}

export const getClosedChallengesVote = (fromNo, toNo) => {
  return dispatch => {
    dispatch(gettingClosedChallengesVote(fromNo, toNo))
    console.log('gettingClosedChallenges', fromNo, toNo);

    return fetch(keys.url+'getClosedChallenges/'+fromNo+'/'+toNo)
    .then((response)=>{
      return response.json()
    })
    .then((closedChallengeList)=>{
      dispatch(gotClosedChallengesVote(closedChallengeList))
    })
    .catch((error)=>{
      console.warn(error)
    })
  }
}
//--------------------------------------



export const gettingChallenges = (userId) => {
  return {
    type: GETTING_CHALLENGES,
    userId
  }
}

export const gotChallenges = (challenges) => {
  return {
    type: GOT_CHALLENGES,
    challenges
  }
}

export const getChallenges = (userId) => {
  return dispatch => {
    dispatch(gettingChallenges(userId))

    return fetch(keys.url+'getInitialData/'+userId)
    .then((response)=>{
      return response.json()
    })
    .then((challengeList)=>{
      dispatch(gotChallenges(challengeList))
    })
    .catch((error)=>{
      console.warn(error)
    })
  }
}

export const ChallengePosting = (challenge) => {
  return {
    type: CHALLENGE_POSTING,
    challenge
  }
}

export const ChallengePosted = (challenge) => {
  return {
    type: CHALLENGE_POSTED,
    challenge
  }
}

export const SendChallenge = (challenge) => {
  return dispatch => {
    dispatch(ChallengePosting(challenge))

    let newChallenge = {
        challengeText: challenge.description,
        points: challenge.points,
        createdBy: challenge.createdBy,
        userChallenged: challenge.assignedTo,
        completed: false
    }

    return fetch(keys.url+'submitChallenge', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newChallenge)
    })
    .then((response) => {
      return response.json()
      //We need to use response instead of newChallenge to get the unique challenge I.D which will be created by the database
    })
    .then((postedChallenge) => {
      Actions.myChallenges();
      dispatch(ChallengePosted(postedChallenge))
    })
    .catch((error) => {
      console.warn(error)
    })
  }
}

export const voteOnChallenge = (challengeId, voteId, fromNo, toNo) => {
  return dispatch => {
    return fetch(keys.url+'voteOnProof/'+challengeId+'/'+voteId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((updatedChallenge) => {
      return dispatch(getClosedChallengesVote(fromNo, toNo))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export const setChallengesViewStatus = (challengesView) => {
  return {
    type: CHANGE_CHALLENGES_VIEW,
    challengesView
  }
}


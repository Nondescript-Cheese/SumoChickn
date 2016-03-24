export const CHALLENGE_POSTING = 'CHALLENGE_POSTING'
export const CHALLENGE_POSTED = 'CHALLENGE_POSTED'
export const CHANGE_CHALLENGES_VIEW = 'CHANGE_CHALLENGES_VIEW'
export const GETTING_CHALLENGES = 'GETTING_CHALLENGES'
export const GOT_CHALLENGES = 'GOT_CHALLENGES'

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
    console.log("DISPATCHED THE FIRST ONE and user ID was", userId)

    return fetch('http://localhost:3000/getInitialData/'+ userId)
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

    return fetch('http://localhost:3000/submitChallenge', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newChallenge)
    })
    .then((response) => {
      return response.json()
      //We need to use reponse instead of newChallenge to get the unique challenge I.D which will be created by the database
    })
    .then((postedChallenge) => {
      dispatch(ChallengePosted(postedChallenge))
    })
    .catch((error) => {
      console.warn(error)
    })
  }
}

export const setChallengesViewStatus = (challengesView) => {
  return {
    type: CHANGE_CHALLENGES_VIEW,
    challengesView
  }
}


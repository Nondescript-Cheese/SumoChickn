export const CHALLENGE_POSTING = 'CHALLENGE_POSTING'
export const CHALLENGE_POSTED = 'CHALLENGE_POSTED'
export const CHANGE_CHALLENGES_VIEW = 'CHANGE_CHALLENGES_VIEW'

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

    console.log(newChallenge)

    return fetch('/submitChallenge', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newChallenge)
    })
    .then((response) => {
      //We need to use reponse instead of newChallenge to get the unique challenge I.D which will be created by the database
      dispatch(ChallengePosted(response))
    })
    .catch((error) => {
      console.warn(error);
    });
  }
}

export const setChallengesViewStatus = (challengesView) => {
  return {
    type: CHANGE_CHALLENGES_VIEW,
    challengesView
  }
}


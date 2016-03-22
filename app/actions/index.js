export const CHALLENGE_POSTING = 'CHALLENGE_POSTING'
export const CHALLENGE_POSTED = 'CHALLENGE_POSTED'

export const ChallengePosting = (challenge) => {
  return {
    type: CHALLENGE_POSTING,
    payload: challenge
  }
}

export const ChallengePosted = (challenge) => {
  return {
    type: CHALLENGE_POSTED,
    payload: challenge
  }
}

export const SendChallenge = (challenge) => {
  return dispatch => {
    dispatch(ChallengePosting(challenge))

    let newChallenge = {
        challengeText: challenge.challengeText,
        points: challenge.points,
        createdBy: challenge.createdBy,
        id_user: challenge.id_user,
        id_tribe: challenge.id_tribe,
        completed: false
    }

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


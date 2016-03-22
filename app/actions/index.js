export const CHALLENGE_POSTING = 'CHALLENGE_POSTING'
export const CHALLNEGE_POSTED = 'CHALLNEGE_POSTED'

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
  
}
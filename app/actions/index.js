let challengeID = 0
export const addChallenge = (text) => {
  return {
    type: 'ADD_CHALLENGE',
    id: challengeID++,
    text
  }
}
var ToggleChallenge_ServerEndpoint = 'localhost:3000/toggleChallenge/';



export const challengeStatusChanging = (id) => {
  return {
    type: 'TOGGLING_CHALLENGE',
    id: id
  }
}

export const challengeStatusChanged = (id) => {
  return {
    type: 'TOGGLED_CHALLENGE',
    id: id
  }
}

export const toggleChallengeStatus = (id) => {
  return dispatch => {
  	dispatch(challengeStatusChanging(id));
  	return fetch('/toggleChallenge/'+id, {
  	  method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  	})
    .then(response => {
      dispatch(challengeStatusChanged(id));
    })
    .catch(error => {
      console.warn(error);
    })

  }
}
export const UPLOADING_PICTURE = 'UPLOADING_PICTURE'
export const UPLOADED_PICTURE = 'UPLOADED_PICTURE'
export const CAMERA_CHALLENGE_ID = 'CAMERA_CHALLENGE_ID'

let RNUploader = require('NativeModules').RNUploader
let xmlConvert = require("node-xml2json");


export const postingPicture = (challengeId, picture) => {

  return (dispatch) => {
    var upload = new Promise((resolve, reject) => {
      RNUploader.upload(picture, (err, res) => {
        if(err) {
          reject(err);
        }
        const status = res.status
        const response = xmlConvert.parser(res.data)
        resolve(response)
      })
    })

    upload.then((data) => {
      dispatch(postPicture(challengeId, data.postresponse.location))
    })
  }
}

export const postPicture = (challengeId, awsUrl) => {
  return (dispatch) => {
    return fetch('http://159.203.239.224:3000/addPhoto/'+challengeId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "url": awsUrl
      })
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log('THIS IS THE DATA', data)
    })
  }
}

export const cameraChallengeId = (challengeId) => {
  return {
    type: CAMERA_CHALLENGE_ID,
    id: challengeId
  }
}

export const getChallengePhoto = (challengeId) => {
  return (dispatch)=>{
    return fetch('http://159.203.239.224:3000/getPhoto/'+challengeId)
    .then((response)=>{
      return response.text()
    })
    .then((photoURL)=>{
      return photoURL
    })
    .catch((error)=>{
      console.log("ERROR FROM ACTION", error)
    })
  }
}

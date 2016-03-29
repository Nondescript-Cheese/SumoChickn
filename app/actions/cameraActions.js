export const UPLOADING_PICTURE = 'UPLOADING_PICTURE'
export const UPLOADED_PICTURE = 'UPLOADED_PICTURE'
// import { polyfill } from 'es6-promise'; polyfill();

let RNUploader = require('NativeModules').RNUploader
let xmlConvert = require("node-xml2json");


export const postingPicture = (challengeId, picture) => {
  console.log('PICTURE', picture)

  return (dispatch) => {
    var upload = new Promise((resolve, reject) => {
      RNUploader.upload(picture, (err, res) => {
        if(err) {
          reject(err);
        }
        const status = res.status
        const response = xmlConvert.parser(res.data)
        resolve(response)
        console.log('logging with', response)
        console.log('STATUS', status)
      })
    })

    upload.then((data) => {
      dispatch(postPicture(challengeId, data.postresponse.location))
      // console.log('WORK PLEASE', data)
    })
  }
}

export const postPicture = (challengeId, awsUrl) => {
  console.log('I WORKD', awsUrl)
  return (dispatch) => {
    return fetch('http://localhost:3000/addPhoto/1', {
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
      console.log('RESPONSE', response)
      response.json()
    })
    .then((data) => {
      console.log('THIS IS THE DATA', data)
    })
  }
}



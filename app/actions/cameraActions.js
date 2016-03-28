export const UPLOADING_PICTURE = 'UPLOADING_PICTURE'
export const UPLOADED_PICTURE = 'UPLOADED_PICTURE'

let RNUploader = require('NativeModules').RNUploader
let xmlConvert = require("node-xml2json");


export const postingPicture = (picture) => {
  console.log('PICTURE', picture)
  let files = [
    {
        name: 'file[]',
        filename: 'image1.png',
        filepath: 'http://blog.sa.metacdn.com/wp-content/uploads/2013/02/tumblr_inline_milf7qWMw11qz4rgp.png',
        filetype: 'image/png',
    }
  ]
  let opts = {
    url: 'https://challengrproof.s3.amazonaws.com/',
    files: files, 
    method: 'POST',                             // optional: POST or PUT
    headers: { 'Accept': 'application/json' },  // optional
    // params: { 'user_id': 1 },                   // optional
  };
  return (dispatch) => {
    RNUploader.upload(opts, (err, res) => {
      if(err) {
        return err;
      }
      const status = res.status
      const response = xmlConvert.parser(res.data)
      console.log('logging with', response)
      console.log('STATUS', status)
    })
  }
}

export const postedPicture = (picture) => {
  return (dispatch) => {
    return dispatch(postingPicture(picture))
  }
}

export const postPicture = (challengeId, awsUrl) => {
  return dispatch => {
    return fetch('https://localhost:3000/addPhoto/'+challengeId+'/'+awsUrl, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(awsUrl)
    })
    .then((response) => {
      response.json()
    })
    .then((data) => {
      console.log('THIS IS THE DATA', data)
    })
  }
}

// doUpload(){
//     let files = [
//         {
//             name: 'file[]',
//             filename: 'image1.png',
//             filepath: 'assets-library://....',  // image from camera roll/assets library
//             filetype: 'image/png',
//         },
//         {
//             name: 'file[]',
//             filename: 'image2.gif',
//             filepath: "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7",
//             filetype: 'image/gif',
//         },
//     ];

//     let opts = {
//         url: 'http://my.server/api/upload',
//         files: files, 
//         method: 'POST',                             // optional: POST or PUT
//         headers: { 'Accept': 'application/json' },  // optional
//         params: { 'user_id': 1 },                   // optional
//     };

//     RNUploader.upload( opts, (err, response) => {
//         if( err ){
//             console.log(err);
//             return;
//         }

//         let status = response.status;
//         let responseString = response.data;
//         let json = JSON.parse( responseString );

//         console.log('upload complete with status ' + status);
//     });
// }

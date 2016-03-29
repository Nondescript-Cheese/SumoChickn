import { connect } from 'react-redux'
import CameraApp from '../components/Camera'
import { Actions } from 'react-native-router-flux'
import { postPicture} from '../actions/cameraActions'
import { postingPicture } from '../actions/cameraActions'
import keys from '../utils/env'
const s3Policy = require('../utils/s3Policies')

const mapStateToProps = (state) => {
  // console.log("THIS IS STATTE",state.challenges.challengeList);
  return {
    currentId: state.challenges.challengeList[0].id,
    allChallenges: state.challenges.challengeList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendPhotoToAWS: (picture, challengeId) => {
      const config = {
        bucket: 'challengrproof',
        region: keys.region,
        key: keys.accessKey,
        secret: keys.secretKey,
        type: 'image/',
        path: `${challengeId}`,
        acl: 'public-read-write',
        expires: new Date(Date.now() + 30000), // expires in 30 seconds
        length: 10485760, // 10M as maximal size
      }
      const policy = s3Policy(config);

      // const fileNameHash = CryptoJS.SHA1(picture, keys.accessKey).toString();

      const file = [{
        name: 'file',
        filename: picture,
        filepath: picture,
        filetype: 'image/jpg',
      }]

      const pictureAndS3Auth = {
        url: `https://${config.bucket}.s3.amazonaws.com/`,
        files: file,
        params: {
          key: `${challengeId}/${file[0].filename}`,
          acl: config.acl,
          'X-Amz-Signature': policy.signature,
          'x-amz-credential': policy.credential,
          'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
          'X-Amz-Date': `${policy.date}T000000Z`,
          'Content-Type': 'image/jpg',
          policy: policy.policy,
          success_action_status: '201',
          'x-amz-meta-uuid': '14365123651274',
        }
      }

       dispatch(postingPicture(challengeId, pictureAndS3Auth))
       // const fileObj = {
       //   data: {
       //     path: picture
       //   }
       // }
       // dispatch(postPicture(challengeId, fileObj));
    } 
  }
}

const CameraConnect = connect(
  mapStateToProps,
  mapDispatchToProps
  )(CameraApp)

  export default CameraConnect






















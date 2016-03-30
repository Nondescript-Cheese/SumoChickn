import { connect } from 'react-redux'
import ProofFeedComponent from '../components/ProofFeedComponent.js'

let dataArray = [
 {
   "id": 2,
   "challengeText": "example challenge 2",
   "points": 5,
   "createdBy": null,
   "completed": true,
   "userChallenged": "Michael Cheung",
   "proofUrl": null,
   "closedDate": "2016-03-30T01:20:50.000Z",
   "TribeId": null,
   "UserId": 1
 },
 {
   "id": 1,
   "challengeText": "example challenge 1",
   "points": 4,
   "createdBy": null,
   "completed": true,
   "userChallenged": "Michael Cheung",
   "proofUrl": null,
   "closedDate": "2016-03-30T01:21:15.000Z",
   "TribeId": null,
   "UserId": 1
 },
 {
   "id": 3,
   "challengeText": "example challenge 2",
   "points": 5,
   "createdBy": null,
   "completed": true,
   "userChallenged": "Michael Cheung",
   "proofUrl": null,
   "closedDate": "2016-03-30T01:21:18.000Z",
   "TribeId": null,
   "UserId": 1
 },
 {
   "id": 5,
   "challengeText": "example challenge 3",
   "points": 5,
   "createdBy": "Banana",
   "completed": true,
   "userChallenged": "Michael Cheung",
   "proofUrl": null,
   "closedDate": "2016-03-30T01:21:20.000Z",
   "TribeId": null,
   "UserId": 1
 }
];




const mapStateToProps = (state) => {
  return {
    allClosedChallenges: dataArray,
  }
}

const ProofFeed = connect(
  mapStateToProps,
  null
)(ProofFeedComponent);

export default ProofFeed;




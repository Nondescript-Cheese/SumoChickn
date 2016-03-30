import { connect } from 'react-redux'
import MyChallenges from '../components/MyChallengesComponent.js'
import { setChallengesViewStatus, getChallenges } from '../actions'
import { toggleChallengeStatus } from '../actions/toggleChallengeStatus'
import { fetchAllUsers } from '../actions/fetchUsers'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import { cameraChallengeId, getChallengePhoto } from '../actions/cameraActions'

const filterView = (challenges, challengesViewStatus) => {
  if(challenges.length > 0){
    switch (challengesViewStatus) {
      case true :
        return challenges.filter(c => c.completed)
      case false:
        return challenges.filter(c=> !c.completed)
    }
  } else {
    return false
  }
}

const quoteMaker = ()=>{
  let quotes = ["The knowledge you seek is located on Bookstrap", "How much deeper would the ocean be without sponges?", "Do your toy problems", "The road to riches is paved with React Native", "Cover stones in foil to make decorative balloon weights for parties", "Rebase often, but commit even more often", "Only eat free-range/gluten free/organic/vegan/non-dairy", "Ball is life", "Punjab lunch-time offers are available to Hack Reactor students all day"]
  return quotes[Math.floor(Math.random()*quotes.length)]
}

const checkChallenges = (array) => {
  if(array.length > 0) {
    return array
  } else {
    return false
  }
}
const mapStateToProps = (state) => {
  return {
    visibleChallenges: checkChallenges(filterView(state.challenges.challengeList, state.challengesViewStatus)),
    allUserData: state.allUsers.usersList,
    refreshingChallenges: state.challenges.gettingUsersChallenges,
    currentUser: state.currentUser.userDetails[0],
    challengesViewStatus: state.challengesViewStatus,
    quoteMaker: quoteMaker
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: bindActionCreators(setChallengesViewStatus, dispatch),
    cameraChallengeId: bindActionCreators(cameraChallengeId, dispatch),
    fetchAllUserData: bindActionCreators(fetchAllUsers, dispatch),
    getNewChallenges: bindActionCreators(getChallenges, dispatch),
    getChallengePhoto: bindActionCreators(getChallengePhoto, dispatch) 
  }
}

const ChallengeList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(MyChallenges)

export default ChallengeList
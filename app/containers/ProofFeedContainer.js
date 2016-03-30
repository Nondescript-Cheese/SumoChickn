import { connect } from 'react-redux'
import ProofFeedComponent from '../components/ProofFeedComponent.js'
import { getClosedChallenges, voteOnChallenge } from '../actions'
import { bindActionCreators } from 'redux'


const mapStateToProps = (state) => {
  return {
    allClosedChallenges: state.challenges.closedChallengesList,
    currentUserId: state.currentUser.userDetails[0].id,
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
    getClosedChallenges: bindActionCreators(getClosedChallenges, dispatch),
    voteOnChallenge: bindActionCreators(voteOnChallenge, dispatch),
	}
}

const ProofFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProofFeedComponent);

export default ProofFeed;




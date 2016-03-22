import { connect } from 'react-redux'
import MyChallenges from '../components/MyChallengesComponent.js'
import { setChallengesViewStatus } from '../actions'

const filterView = (challenges, challengesViewStatus) => {
  switch (challengesViewStatus) {
    case true :
      return challenges.filter(c => c.completed)
    case false:
      return challenges.filter(c=> !c.completed)
  }
}


const mapStateToProps = (state) => {
  return {
    visibleChallenges: filterView(state.challenges.ChallengeList, state.challengesViewStatus),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: bindActionCreators(setChallengesViewStatus, dispatch)
    }
  }
}
const ChallengeList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(MyChallenges)

export default ChallengeList
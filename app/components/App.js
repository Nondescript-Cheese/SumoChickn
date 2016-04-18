import React, {
  View,
  Text,
  StatusBar
} from 'react-native'

import LoginAuth from '../containers/Login'
import SendChallenges from '../containers/SendChallenge'
import CameraConnect from '../containers/CameraContainer'
import ChallengeList from '../containers/ChallengeList'
import Leaderboard from '../containers/Leaderboard'
import { Scene, Router, Actions } from 'react-native-router-flux'
import ProofFeed from '../containers/ProofFeedContainer'

const ScrollableTabView = require('react-native-scrollable-tab-view');


let myChallenges = () => {
  return(
    <View style={{flex: 1 }}>
      <ScrollableTabView>
        <ChallengeList tabLabel="MyChallenges"/>
        <ProofFeed tabLabel="Proof"/>
        <Leaderboard tabLabel="Leaderboard"/>
      </ScrollableTabView>
    </View>
  )
}

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene type="replace" key="signUp" initial={true} component={LoginAuth} />
    <Scene type="replace" key="myChallenges" component={myChallenges} />
    <Scene type="replace" key="createChallenge" component={SendChallenges}/>
    <Scene type="replace" key="camera" component={CameraConnect} />
  </Scene>
);

const App = () => (
 <View style={{ flex: 1 }}>
  <StatusBar
    hidden={true}
    showHideTransition="slide"
    animated={true}
  />
  <Router scenes={scenes} />
 </View>
)

export default App



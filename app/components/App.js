import React, {
  View,
  Text
} from 'react-native'

import HandleRoutes from '../containers/HandleRoutes';
import Signup from './Signup'
import SendChallenges from '../containers/SendChallenge'
import ChallengeList from '../containers/ChallengeList'
import { Scene, Router, Actions } from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene type="replace" key="signUp" initial={true} component={Signup} />
    <Scene type="replace" key="createChallenge" component={SendChallenges} />
    <Scene type="replace" key="myChallenges" component={ChallengeList} />
  </Scene>
);
//the view should hold each container
const App = () => (
 <View style={{ flex: 1 }}>
     <Router scenes={scenes} />
     <View>
       <HandleRoutes />
     </View>
   </View>
)

export default App
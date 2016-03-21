import React, {
  View,
  Text
} from 'react-native'

import HandleRoutes from '../containers/HandleRoutes';
import TestPage from './TestComponent'
import CreateChallenges from './CreateChallengesComponent'
import { Scene, Router, Actions } from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene type="replace" key="testPage" initial={true} component={TestPage} />
    <Scene type="replace" key="createChallenge" component={CreateChallenges} />
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
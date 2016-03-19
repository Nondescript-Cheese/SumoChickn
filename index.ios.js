'use strict';
import React, {
  AppRegistry,
  Component
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './app/components/App'
import challengeReducer from './app/reducers'
import thunk from 'redux-thunk'
import immutable from 'immutable'

let store = createStore(challengeReducer, applyMiddleware(thunk))

class challengeApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('challengeApp', () => challengeApp);

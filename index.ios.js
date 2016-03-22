'use strict';
import React, {
  AppRegistry,
  Component
} from 'react-native';

import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import App from './app/components/App'
import challengeReducer from './app/reducers'
import thunk from 'redux-thunk'
import immutable from 'immutable'

const loggerMiddleware = createLogger()

let store = createStore(challengeReducer, applyMiddleware(thunk, loggerMiddleware))

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

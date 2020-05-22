/**
 * @format
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/rootReducer';
// import rootReducer from './src/redux/rootReducer';
const store=createStore(rootReducer,applyMiddleware(thunk));

class ReduxApp extends React.Component {

    render() {
      return (
        <Provider store={store}>
               <App />
        </Provider>
      );
    }
  }
  

AppRegistry.registerComponent(appName, () => ReduxApp);

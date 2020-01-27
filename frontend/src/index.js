import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// BrowserRouter is a component
import {BrowserRouter as Router} from 'react-router-dom';



// createStore is a function that will create a store for us
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'

// Provider is a component we use to wrap our App
import {Provider} from 'react-redux'

import goatReducer from './redux/goatReducer'
import cakeReducer from './redux/cakeReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  cakeInfo: cakeReducer,
  goatInfo: goatReducer,
})

let storeObj = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))



ReactDOM.render(
  <Provider store={storeObj}>
    <Router>
      <App />
    </Router>
  </Provider>
, document.getElementById('root'));

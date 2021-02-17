import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import reducers from './reducers';
 
// optional configuration
const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '5px',
  transition: transitions.FADE
}

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();

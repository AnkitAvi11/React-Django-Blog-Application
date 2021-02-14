import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

ReactDOM.render(
  <Provider store={createStore(()=>{}, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();

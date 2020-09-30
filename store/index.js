import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counterReducer';

export default createStore(
  combineReducers({
    counter: counterReducer,
  }), 
  composeWithDevTools()
);

import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import session from './sessionReducer';

export default createStore(
  combineReducers({
    session,
  }),
  {},
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

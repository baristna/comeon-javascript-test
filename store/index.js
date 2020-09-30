import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import session from './sessionReducer';
import games from './gamesReducer';

export default createStore(
  combineReducers({
    session,
    games,
  }),
  {},
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

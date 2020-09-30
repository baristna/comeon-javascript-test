import { actionTypes } from './action-types';
import request from '../request'

export const fetchGames = () => {
  return dispatch => {
    dispatch(fetchGamesStart());
    return request(
      {
        method: 'get',
        url: '/games',
      })
      .then(({ data }) => {
        dispatch(
          fetchGamesSuccess(data)
        );
      })
      .catch(err => dispatch(fetchGamesError(err)));
  };
}

export const fetchGamesStart = () => dispatch => {
  return dispatch({
    type: actionTypes.FETCH_GAMES_START
  })
}

export const fetchGamesSuccess = (data) => dispatch => {
  return dispatch({
    type: actionTypes.FETCH_GAMES_SUCCESS,
    payload: data
  })
}

export const fetchGamesError = (err) => dispatch => {
  return dispatch({
    type: actionTypes.FETCH_GAMES_ERROR,
    payload: { err }
  })
}

import Cookies from 'js-cookie';
import { actionTypes } from './action-types';
import request from '../request'

export const loginCheck = () => dispatch => {
  if (Cookies.get('token')) {
    return dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: JSON.parse(Cookies.get('token'))
    })
  }
}

export const login = ({ username, password }) => {
  return dispatch => {
    dispatch(loginStart());
    return request(
      {
        method: 'post',
        url: '/login',
        data: { username, password }
      })
      .then((response) => {
        dispatch(
          loginSuccess({
            username,
            ...response.data.player
          })
        );
      })
      .catch(err => dispatch(loginError(err)));
  };
}

export const loginStart = () => dispatch => {
  return dispatch({
    type: actionTypes.LOGIN_START
  })
}

export const loginSuccess = (data) => dispatch => {
  Cookies.set('token', JSON.stringify(data));

  return dispatch({
    type: actionTypes.LOGIN_SUCCESS,
    payload: data
  })
}

export const loginError = (err) => dispatch => {
  return dispatch({
    type: actionTypes.LOGIN_ERROR,
    payload: {err}
  })
}
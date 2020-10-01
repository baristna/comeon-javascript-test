import { actionTypes } from '../actions/action-types';

const initialState = {
  player: null,
  loading: false,
  error: null
}

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        player: action.payload,
        loading: false,
        error: null,
      };
      case actionTypes.LOGIN_ERROR:
        return {
          ...state,
          error: action.payload.err,
          loading: false,
        };
      case actionTypes.LOGOUT_START:
        return {
          ...state,
          loading: true
        };
      case actionTypes.LOGOUT_SUCCESS:
        return {
          ...state,
          player: null,
          loading: false,
        };
      case actionTypes.LOGOUT_ERROR:
        return {
          ...state,
          error: action.payload.error,
          player: null,
          loading: false,
        };
    default:
      return state;
  }
}

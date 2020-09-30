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
        loading: true
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        player: action.payload,
        loading: false,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
}

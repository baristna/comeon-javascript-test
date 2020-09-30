import { actionTypes } from '../actions/action-types';

const initialState = {
  list: [],
  categories: [],
  loading: false,
  error: null
}

export default function gamesReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.FETCH_GAMES_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_GAMES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case actionTypes.FETCH_GAMES_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
}

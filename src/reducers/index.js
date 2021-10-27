import { combineReducers } from "redux";
import { REQUEST, SUCCESS, FAIL, SELECT } from '../actions';

const INITIAL_STATE = {
  selected: '',
  loading: false,
  json: {},
  error: null,
};

const defaultReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SELECT:
      return {
        ...state,
        selected: action.selected,
      }
    case REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS:
      return {
        ...state,
        json: action.json,
        loading: false,
      };
    case FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ defaultReducer });

export default rootReducer;

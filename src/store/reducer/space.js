import {
  LOAD_SPACE_LIST,
  SET_SPACE_REGISTER,
  SET_SPACE_DETAIL,
  SPACE_QUERY,
} from '../constants/space';

function spaceReducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD_SPACE_LIST:
      return {
        ...state,
        spaceList: action.payload,
      };
    case SET_SPACE_REGISTER:
      return {
        ...state,
        spaceRegister: action.payload,
      };
    case SET_SPACE_DETAIL:
      return {
        ...state,
        spaceDetail: action.payload,
      };
    case SPACE_QUERY:
      return {
        ...state,
        spaceQuery: action.payload,
      };
    default:
      return state;
  }
}
export default spaceReducer;

import {
  LOAD_SPACE_LIST,
  LOAD_SPACE_LIST_BYHOSTID,
  SET_SPACE_REGISTER,
  SET_SPACE_DETAIL,
  FILTER_SPACE,
} from '../constants/space';

function spaceReducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD_SPACE_LIST:
      return {
        ...state,
        spaceList: action.payload,
      };
    case LOAD_SPACE_LIST_BYHOSTID:
      return {
        ...state,
        spacesHostList: action.payload,
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
    case FILTER_SPACE: {
      const query = action.payload.toLowerCase();
      return {
        ...state,
        query,
      };
    }
    default:
      return state;
  }
}
export default spaceReducer;

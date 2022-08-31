import { LOAD_SPACE_LIST, SET_SPACE_REGISTER, SET_SPACE_DETAIL } from '../constants/space';

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
    default:
      return state;
  }
}
export default spaceReducer;

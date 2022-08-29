import { LOAD_SPACE_LIST, SET_SPACE_REGISTER } from '../constants/space';

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
    default:
      return state;
  }
}
export default spaceReducer;

/* export function setSpaceReducer(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
 */

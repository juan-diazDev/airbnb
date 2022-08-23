import { LOAD_SPACE_LIST } from '../constants/space';

function spaceReducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD_SPACE_LIST:
      return {
        ...state,
        spaceList: action.payload,
      };
    default:
      return state;
  }
}

export default spaceReducer;

import SET_ERROR from '../constants/ui';

function uiReducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default uiReducer;

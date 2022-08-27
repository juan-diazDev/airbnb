import LOAD_USER from '../constants/user';

const userReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        userDetail: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

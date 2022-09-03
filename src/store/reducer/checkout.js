import LOAD_CHECKOUT_FORM from '../constants/checkout';

function checkoutReducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD_CHECKOUT_FORM:
      return {
        ...state,
        checkoutForm: action.payload,
      };
    default:
      return state;
  }
}

export default checkoutReducer;

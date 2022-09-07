import LOAD_CHECKOUT_FORM from '../constants/checkout';

const loadCheckoutForm = (checkoutForm) => ({ type: LOAD_CHECKOUT_FORM, payload: checkoutForm });

export default loadCheckoutForm;

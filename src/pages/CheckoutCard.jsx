import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Payments from '../components/Payments';

const stripePromise = loadStripe('pk_test_51LagidIp8jByeIGMvEdRmrWVecCSStOhopAvvxzuZaaosqDvF0uwrQWah9dCM3Y5e8tCBORfnEP52qDTGHu0XRYQ00hBnXIf1f');

const CheckoutCard = () => (
  <div>
    <Elements stripe={stripePromise}>
      <Payments />
    </Elements>
  </div>
);

export default CheckoutCard;

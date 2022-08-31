/* eslint-disable no-console */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './styles.scss';

const Payments = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log({ '[Error]': error.message });
      return;
    }

    console.log({ '[Paymethod]': paymentMethod });
    const token = localStorage.getItem('token');
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        paymentMethod,
        amount: 10_000,
      }),
    };

    const response = await fetch('http://localhost:3030/api/payment', options);
    console.log('🚀 ~ file: index.jsx ~ line 37 ~ handleSubmit ~ response', response);
    // const body = await response.json();
  };

  return (
    <div className="background">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Payments;

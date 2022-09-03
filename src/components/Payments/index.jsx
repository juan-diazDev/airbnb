import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import './styles.scss';

const Payments = () => {
  const { checkoutForm } = useSelector((state) => state.checkout);
  const {
    adults,
    checkOut,
    checkIn,
    children,
    pets,
    price,
    image,
    title,
  } = checkoutForm;
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
      return;
    }

    const token = localStorage.getItem('token');
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        paymentMethod,
        amount: price,
      }),
    };

    const response = await fetch('http://localhost:3030/api/payment', options);
    if (response) {
      swal.fire(
        'Good job!',
        'You clicked the button!',
        'success',
      );
    } else {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className="payment__main-container">
      <section className="payment__left-container">
        <div className="payment__info-conatiner">
          <h1>{title}</h1>
          <div className="payment__image-conatiner">
            <img className="payment__image__image" src={image} alt="space" />
          </div>
          <div className="payment__adults-info">
            <p>Adult</p>
            <div>{adults}</div>
          </div>
          <div className="payment__children-info">
            <p>children</p>
            <div>{children}</div>
          </div>
          <div className="payment__pets-info">
            <p>pets</p>
            <div>{pets}</div>
          </div>
          <div className="payment__checkIn-info">
            <p>checkIn</p>
            <div>{checkIn}</div>
          </div>
          <div className="payment__checkOut-info">
            <p>checkOut</p>
            <div>{checkOut}</div>
          </div>
          <div className="payment__price-info">
            <p>price</p>
            <div>{price}</div>
          </div>
        </div>
      </section>

      <section className="payment__payment-container">
        <form onSubmit={handleSubmit}>
          <CardElement className="payment__payment-form" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Payments;

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';
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
      card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
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
        amount: price * 1000,
        checkoutForm,
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
    <main className="payment__main-container">
      <header className="payment__head">
        <Link to="/">
          <nav className="payment__head__logo__image-container">
            <img
              src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659662807/images/Logo/Pink_lmr4oj.png"
              alt="logo"
            />
          </nav>
        </Link>
      </header>
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
            <div><b>$</b> {price}</div>
          </div>
        </div>
      </section>

      <section className="payment__payment-container">
        <h1 className="payment__title">Payment Method</h1>
        <form onSubmit={handleSubmit}>
          <CardNumberElement className="payment__payment-form" />
          <div className="payment__payment-form__item">
            <CardExpiryElement className="payment__payment-form__exp" />
            <CardCvcElement className="payment__payment-form__cvc" />
          </div>
          <div className="payment__payment-form__country">
            <select name="country" id="country" className="payment__payment-form__select__country">
              <option disabled>country --</option>
              <option value="USA">USA</option>
              <option value="COL">Colombia</option>
            </select>
          </div>
          <button type="submit" className="payment__submit__button">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default Payments;

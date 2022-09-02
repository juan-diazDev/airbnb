/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';

const CheckOutCard = ({ price, dates }) => {
  console.log('🚀 ~ file: index.jsx ~ line 8 ~ CheckOutCard ~ price', price);
  // const dispatch = useDispatch();
  // const count = useSelector((state) => state);

  // const handleDecrement = () => {
  //   dispatch(decrement);
  // };

  // const handleIncrement = () => {
  //   dispatch(increment);
  // };
  return (
    <>
      <section className="spaceDetail__sub-menu-container">
        <div className="spaceDetail__sub-menu__text-container">
          <p className="spaceDetail__sub-menu__price"><span className="span">$</span>{price}<span> usd / night</span></p>
          <p className="spaceDetail__sub-menu__dates">{dates} </p>
        </div>
        <div className="spaceDetail__sub-menu__button-container">
          <Link to="/checkout">
            <button type="button" className="spaceDetail__sub-menu-button">
              Reserve
            </button>
          </Link>
        </div>
      </section>

      <section className="spaceDetail__checkout-card-container">
        <form>
          <div className="spaceDetail__checkout-card__price">
            <span className="span">$</span>{price} <span> night</span>
          </div>
          <div className="spaceDetail__checkout-card__options-container">
            <div className="spaceDetail__checkout-card__options__check-in">
              <label htmlFor="date">
                check-in
                <input type="date" required />
              </label>
            </div>
            <div className="spaceDetail__checkout-card__options__check-out">
              <label htmlFor="date">
                check-out
                <input type="date" required />
              </label>
            </div>

            <nav className="spaceDetail__checkout-card__options__guests">
              <label htmlFor="touch"><span>Guest</span></label>
              <input type="checkbox" id="touch" />

              <ul className="spaceDetail__dropDown">
                <li>
                  <div className="dropDown__option-conatainer">
                    <p>Adults</p>
                    <div className="dropDown__option-buttons">
                      <button type="button">-</button>
                      <p>1</p>
                      <button type="button">+</button>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="dropDown__option-conatainer">
                    <p>Children</p>
                    <div className="dropDown__option-buttons">
                      <button type="button">-</button>
                      <p>1</p>
                      <button type="button">+</button>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="dropDown__option-conatainer">
                    <p>Pets</p>
                    <div className="dropDown__option-buttons">
                      <button type="button">-</button>
                      <p>1</p>
                      <button type="button">+</button>
                    </div>
                  </div>
                </li>

              </ul>
            </nav>

          </div>
          <Link to="/Payments">
            <div className="spaceDetail__checkout-card__button-container">
              <button type="button" className="spaceDetail__checkout-card__button">
                Reserve
              </button>
            </div>
          </Link>
        </form>

        {/* <hr />

        <div className="checkout-card__payment__details-container">
          <div className="checkout-card__payment__details">
            <p>{price} x 6 nights</p>
          </div>
          <div className="checkout-card__payment__details-sum">
            $42 usd
          </div>
        </div>

        <hr />

        <div className="checkout-card__payment__total-container">
          <div className="checkout-card__payment__total-text">
            Total:
          </div>
          <div className="checkout-card__payment__total">
            $42 usd
          </div>
        </div> */}
      </section>
    </>
  );
};

CheckOutCard.defaultProps = {
  price: null,
  dates: null,
};

CheckOutCard.propTypes = {
  price: PropTypes.number,
  dates: PropTypes.string,
};
export default CheckOutCard;

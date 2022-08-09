import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CheckOutCard = ({ price, dates }) => (
  <>
    <section className="spaceDetail__sub-menu-container">
      <div className="spaceDetail__sub-menu__text-container">
        <p className="spaceDetail__sub-menu__price">{price}<span> / night</span></p>
        <p className="spaceDetail__sub-menu__dates">{dates} </p>
      </div>
      <div className="spaceDetail__sub-menu__button-container">
        <Link to="/">
          <button type="button" className="spaceDetail__sub-menu-button">
            Reserve
          </button>
        </Link>
      </div>
    </section>

    <section className="spaceDetail__checkout-card-container">
      <form>
        <div className="spaceDetail__checkout-card__price">
          {price} <span>/ night</span>
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
          <div className="spaceDetail__checkout-card__options__guests">
            <div>
              <p className="p1">Guests</p>
              <p className="p2">This is a dropdown menu</p>
            </div>
            <div className="dropdown__image-container">
              <img className="dropdown__image-image" src="https://res.cloudinary.com/equipo-maravilla/image/upload/a_270/v1659723860/images/BackArrow/Dark_Gray_obpkut.png" alt="dropdown-arrow" />
            </div>
          </div>
        </div>
        <div className="spaceDetail__checkout-card__button-container">
          <button type="button" className="spaceDetail__checkout-card__button">
            Reserve
          </button>
        </div>
      </form>
    </section>
  </>
);

CheckOutCard.defaultProps = {
  price: null,
  dates: null,
};

CheckOutCard.propTypes = {
  price: PropTypes.string,
  dates: PropTypes.string,
};
export default CheckOutCard;

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CheckOutCard = ({ price, dates }) => (
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

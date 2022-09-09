/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';

const ReservationCard = ({
  space,
  arrive,
  departure,
  pets,
  price,
  adults,
}) => {
  return (
    <main className="mainSection mainSection--queri-bgscreen">
      <div className="card__image-container">
        <div>
          <img className="card__image__image" src={space.image} alt="" />
        </div>
      </div>
      <div className="info-container">
        <div className="card__title"><b>{space.title}</b></div>
        <p className="card__description">{arrive} {departure} {pets} {price} {adults} </p>
        <div className="card__price"> {price} <span>night</span></div>
      </div>
    </main>
  );
};

ReservationCard.propTypes = {
  space: PropTypes.shape().isRequired,
  arrive: PropTypes.string,
  departure: PropTypes.string,
  pets: PropTypes.string,
  price: PropTypes.string,
  adults: PropTypes.string,
};

ReservationCard.defaultProps = {
  arrive: null,
  departure: null,
  pets: null,
  price: null,
  adults: null,
};

export default ReservationCard;

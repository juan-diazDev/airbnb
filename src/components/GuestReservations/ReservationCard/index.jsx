import './styles.scss';
import PropTypes from 'prop-types';

const ReservationCard = ({ booking }) => (

  <div className="booking__mainSection ">
    <div className="booking__image-container">
      <img className="booking__image__image" src={booking?.spaceId?.img[0]} alt="" />
    </div>
    <div className="booking__info-container">
      <div className="booking__title"><b>{booking?.spaceId?.title}</b></div>
      <p className="booking__description">{booking?.spaceId?.description}</p>
      <p className="booking__details"> {booking?.adults} Adults</p>
      <p className="booking__details"> {booking?.children} Children</p>
      <p className="booking__details"> {booking?.pets} Pets</p>
      <div className="booking__price"> {booking?.price} <span>Total</span></div>
    </div>
  </div>
);

ReservationCard.propTypes = {
  booking: PropTypes.shape().isRequired,
};

export default ReservationCard;

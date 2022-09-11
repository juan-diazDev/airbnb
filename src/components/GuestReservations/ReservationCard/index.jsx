import './styles.scss';
import PropTypes from 'prop-types';

const ReservationCard = ({ booking }) => {
  const arriveDate = new Date(booking?.arrive);
  const arriveDate2 = arriveDate.toLocaleDateString();
  const departureDate = new Date(booking?.departure);
  const departureDate2 = departureDate.toLocaleDateString();

  return (
    <div className="booking__mainSection ">
      <div className="booking__image-container">
        <img className="booking__image__image" src={booking?.spaceId?.img[0]} alt="" />
      </div>
      <div className="booking__info-container">
        <div className="booking__title"><b>{booking?.spaceId?.title}</b></div>
        <p className="booking__description">{booking?.spaceId?.description}</p>
        <p className="booking__details1">You choose:</p>
        <span className="booking__details"> {booking?.adults} Adults</span>
        <span className="booking__details"> {booking?.children} Children</span>
        <span className="booking__details"> {booking?.pets} Pets</span>
        <p className="booking__details1">Your dates:</p>
        <p className="booking__details">Arrive date: {arriveDate2}</p>
        <p className="booking__details">Departure date: {departureDate2}</p>
        <p className="booking__price">$USD {booking?.price} <span>Total</span></p>
      </div>
    </div>
  );
};

ReservationCard.propTypes = {
  booking: PropTypes.shape().isRequired,
};

export default ReservationCard;

import PropTypes from 'prop-types';
import CheckOutCard from './CheckOutCard';
import ImageCarousel from './ImageCarousel';
import './style.scss';

const Details = ({ details }) => (
  <div>
    {
      details ? (
        <div>
          <ImageCarousel image={details.img} title={details.title} />
          <h1 className="detail__title">{details.title}</h1>
          <p className="detail__location">{details.adress.city}, {details.adress.state}</p>
          <CheckOutCard price={details.price} dates={details.dates} />
        </div>
      ) : 'Loading...'
    }
  </div>
);

Details.defaultProps = {
  details: null,
};

Details.propTypes = {
  details: PropTypes.shape(),
};

export default Details;

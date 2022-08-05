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
          <h1>{details.title}</h1>
          <CheckOutCard />
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

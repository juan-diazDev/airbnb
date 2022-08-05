import PropTypes from 'prop-types';
import CheckOutCard from './CheckOutCard';
import ImageCarousel from './ImageCarousel';

const Details = ({ details }) => (
  <div>
    {
      details ? (
        <div>
          <ImageCarousel image={details.img} />
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

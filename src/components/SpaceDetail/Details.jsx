import PropTypes from 'prop-types';
import CheckOutCard from './CheckOutCard';
import ImageCarousel from './ImageCarousel';
import './style.scss';
import Titles from './Titles';

const Details = ({ details }) => (
  <div>
    {
      details ? (
        <div className="complete__spaceDetial-container">
          <ImageCarousel image={details.img} title={details.title} />
          <Titles title={details.title} city={details.adress.city} state={details.adress.state} />
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

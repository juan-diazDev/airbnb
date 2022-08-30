import PropTypes from 'prop-types';
import CheckOutCard from './CheckOutCard';
import Description from './Description';
import ImageCarousel from './ImageCarousel';
import Titles from './Titles';
import './style.scss';
import Header from '../Header';

const Details = ({ details }) => (
  <div className="spaceDetail__container">
    <Header />
    {
      details ? (
        <>
          <ImageCarousel image={details.img} title={details.title} />
          <Titles
            title={details.title}
            city={details.adress.city}
            state={details.adress.state}
          />
          <Description />
          <CheckOutCard price={details.price} dates={details.dates} />
        </>
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

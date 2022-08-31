import PropTypes from 'prop-types';
import CheckOutCard from './CheckOutCard';
import Description from './Description';
import ImageCarousel from './ImageCarousel';
import Titles from './Titles';
import Header from '../Header';
import Loader from '../Loader';
import './style.scss';

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
          <Description details={details} />
          <CheckOutCard price={details.price} dates={details.dates} />
        </>
      ) : <Loader />
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

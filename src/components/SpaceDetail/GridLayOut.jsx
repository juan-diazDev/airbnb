import PropTypes from 'prop-types';
import ImageCarousel from './ImageCarousel';
import Titles from './Titles';
import './Grid-Styles.scss';

const GridLayOut = ({ details }) => (
  <div className="complete__spaceDetial-container">
    {
      details ? (
        <>
          <ImageCarousel image={details.img} title={details.title} />
          <Titles title={details.title} city={details.adress.city} state={details.adress.state} />
          <div className="card c3">
            {details.price}
          </div>
          <div className="card c4">
            {details.title}
          </div>
        </>
      ) : 'Loading...'
    }
  </div>
);

GridLayOut.defaultProps = {
  details: null,
};

GridLayOut.propTypes = {
  details: PropTypes.shape(),
};

export default GridLayOut;

import PropTypes from 'prop-types';

const ImageCarousel = ({ image }) => (
  <div>
    {
      image ? (
        <div>
          <img src={image} alt="Hola" />
        </div>
      ) : 'Loading...'
    }
  </div>
);

ImageCarousel.defaultProps = {
  image: null,
};

ImageCarousel.propTypes = {
  image: PropTypes.string,
};

export default ImageCarousel;

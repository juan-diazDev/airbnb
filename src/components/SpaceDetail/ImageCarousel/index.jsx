import PropTypes from 'prop-types';

const ImageCarousel = ({ image, title }) => (
  <div className="unstyle-container">
    {
      image ? (
        <section className="carousel__section-container">
          <div className="carousel__main-image-container, carousel__mobiles-version-container">
            <img className="carousel__main-image, carousel__mobiles-version-image" src={image} alt={title} />
          </div>
          <div className="carousel__center-image-container, carousel__mobiles-version-container">
            <img className="carousel__center-image-image carousel__mobiles-version-image" src={image} alt={title} />
          </div>
          <div className="carousel__center-image-container, carousel__mobiles-version-container">
            <img className="carousel__center-image-image, carousel__mobiles-version-image" src={image} alt={title} />
          </div>
          <div className="carousel__right-up-image-container, carousel__mobiles-version-container">
            <img className="carousel__right-up-image-image, carousel__mobiles-version-image" src={image} alt={title} />
          </div>
          <div className="carousel__right-down-image-container, carousel__mobiles-version-container">
            <img className="carousel__right-down-image-image, carousel__mobiles-version-image" src={image} alt={title} />
          </div>
        </section>
      ) : 'Loading...'
    }
  </div>
);

ImageCarousel.defaultProps = {
  image: null,
  title: null,
};

ImageCarousel.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default ImageCarousel;

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ImageCarousel = ({ image, title }) => (
  <div className="unstyle-detail">
    {
      image ? (
        <section className="carousel__section-container">
          <Link to="/">
            <div className="carousel_back-arrow-container">
              <img
                className="carousel_back-arrow-icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659723860/images/BackArrow/Dark_Gray_obpkut.png"
                alt="back_arrow"
              />
            </div>
          </Link>
          <div className="carousel__main-image-container carousel__mobiles-version-container">
            <img className="carousel__main-image, carousel__mobiles-version-image" src={image} alt={title} />
          </div>
          <div className="carousel__center-full-container">
            <div className="carousel__center-image-container carousel__mobiles-version-container">
              <img className="carousel__center-image-image carousel__mobiles-version-image" src={image} alt={title} />
            </div>
            <div className="carousel__center-image-container carousel__mobiles-version-container">
              <img className="carousel__center-image-image carousel__mobiles-version-image" src={image} alt={title} />
            </div>
          </div>
          <div className="carousel__final-container">
            <div className="carousel__right-up-image-container carousel__mobiles-version-container">
              <img className="carousel__right-up-image-image carousel__mobiles-version-image" src={image} alt={title} />
            </div>
            <div className="carousel__right-down-image-container carousel__mobiles-version-container">
              <img className="carousel__right-down-image-image carousel__mobiles-version-image" src={image} alt={title} />
            </div>
          </div>
          <Link to="/">
            <div className="carousel_next-arrow-container">
              <img className="carousel_next-arrow-icon" src="https://res.cloudinary.com/equipo-maravilla/image/upload/a_180/v1659723860/images/BackArrow/Pink_xsrmtu.png" alt="arrow" />
            </div>
          </Link>
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

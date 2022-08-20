import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ImageCarousel = ({ image, title }) => (
  <section className="carousel__main-container">
    <Link to="/">
      <div className="carousel_back-arrow-container">
        <img
          className="carousel_back-arrow-icon"
          src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659723860/images/BackArrow/Dark_Gray_obpkut.png"
          alt="back_arrow"
        />
      </div>
    </Link>

    <div className="carousel__main-image-container">
      <img className="carousel__main-image" src={image} alt={title} />
    </div>
    <div className="carousel__section-container">
      <div className="carousel__center-full-container">
        <div className="carousel__center-image-container margin">
          <img className="carousel__center-image-image" src={image} alt={title} />
        </div>
        <div className="carousel__center-image-container">
          <img className="carousel__center-image-image" src={image} alt={title} />
        </div>
      </div>

      <div className="carousel__final-container">
        <div className="carousel__right-up-image-container">
          <img className="carousel__right-up-image-image" src={image} alt={title} />
        </div>
        <div className="carousel__right-down-image-container">
          <img className="carousel__right-down-image-image" src={image} alt={title} />
        </div>
      </div>
    </div>

    <Link to="/">
      <div className="carousel_all-pictures__button-container">
        <p className="carousel_all-pictures__button-text">See all</p>
      </div>
    </Link>
  </section>
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

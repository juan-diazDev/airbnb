import { Link } from 'react-router-dom';
import './styles.scss';

const FloorPlan = () => (
  <div>
    <div className="form__header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="logo__img"
            src="img/LogoIcon/White.png"
            alt="airbnbLogo"
          />
        </Link>
      </div>
      <div className="header__help-container">
        <button className="header__help" type="button">
          Help
        </button>
        <button className="header__save" type="button">
          Save and exit
        </button>
      </div>
    </div>
    <div className="container__question3">
      <h1 className="question__title">
        How many guest would you like to welcome?
      </h1>
    </div>
    <div className="container__options-fixed3">
      <div className="container__options-scroll3">
        <div className="images__space">
          <div className="upload__images-icon">
            <img
              className="img_icon"
              src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660067519/images/ImagesIcon/Images_i7j85n.png"
              alt="imgIconUpload"
            />
          </div>
          <h2 className="upload__title">Drag your photos here</h2>
          <h3 className="upload__description">Add at least 5 photos <br /> or click down below to  </h3>
          <button className="upload_button" type="button">
            Upload from your device
          </button>
        </div>
      </div>
    </div>
    <div className="container__button-step">
      <div className="progress5" />
      <Link to="/Amenities">
        <button className="button__backstep" type="button">
          Back
        </button>
      </Link>
      <Link to="/Title">
        <button className="button__nextstep" type="button">
          Next
        </button>
      </Link>
    </div>
  </div>
);

export default FloorPlan;

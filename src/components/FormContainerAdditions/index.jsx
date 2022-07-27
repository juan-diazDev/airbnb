import { Link } from 'react-router-dom';
import './styles.scss';

const FormContainerAdditions = () => (
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

      <div className="header__buttons">
        <button className="button" type="button">Ask a Superhost</button>
        <button className="button" type="button">Help</button>
      </div>
    </div>

    <div className="form__container">
      <div className="container__question">
        <h1 className="question__title">
          Let guest know what your place has to offer
        </h1>
      </div>

      <div className="container__aditions">
        <div className="addition__question">
          <h2 className="question__addtitle">
            How about these guest favorites?
          </h2>
        </div>

        <div className="add_included-options">
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src=" https://img.freepik.com/premium-vector/wifi-symbol-exclamation-mark-icon-jamming-wireless-internet-signal-wifi-error-failure-wifi-icon-disconnected-wireless-internet-signal-vector-illustration-isolated-white-background_192280-935.jpg?w=2000"
                alt="wifiAdittionIcon"
              />
            </div>
            <h2 className="option__card-title3">Wi-fi</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src=" https://img.freepik.com/premium-vector/wifi-symbol-exclamation-mark-icon-jamming-wireless-internet-signal-wifi-error-failure-wifi-icon-disconnected-wireless-internet-signal-vector-illustration-isolated-white-background_192280-935.jpg?w=2000"
                alt="wifiAdittionIcon"
              />
            </div>
            <h2 className="option__card-title3">Air conditioner</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src=" https://img.freepik.com/premium-vector/wifi-symbol-exclamation-mark-icon-jamming-wireless-internet-signal-wifi-error-failure-wifi-icon-disconnected-wireless-internet-signal-vector-illustration-isolated-white-background_192280-935.jpg?w=2000"
                alt="wifiAdittionIcon"
              />
            </div>
            <h2 className="option__card-title3">Bedrooms</h2>
          </button>
          <button className="option__card3" type="button">
            <div className="option__card-adition">
              <img
                className="adition-icon"
                src=" https://img.freepik.com/premium-vector/wifi-symbol-exclamation-mark-icon-jamming-wireless-internet-signal-wifi-error-failure-wifi-icon-disconnected-wireless-internet-signal-vector-illustration-isolated-white-background_192280-935.jpg?w=2000"
                alt="wifiAdittionIcon"
              />
            </div>
            <h2 className="option__card-title3">Free Parking of premisses</h2>
          </button>
        </div>

        <div className="container__button-step">
          <Link to="/FormContainerFeatures">
            <button className="button__backstep" type="button">Back</button>
          </Link>
          <Link to="/FormContainerImages">
            <button className="button__nextstep" type="button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default FormContainerAdditions;

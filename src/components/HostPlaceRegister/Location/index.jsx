/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import './styles.scss';

/* const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; */

const Location = () => {
  const Marker = ({ text }) => <div>{text}</div>;
  const containerStyle = {
    width: '100%',
    height: '100%',
  };
  const defaultProps = {
    center: {
      lat: 10.394297970724839,
      lng: -75.48149972391892,
    },
    zoom: 15,
  };

  return (
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
      <div className="container__question2">
        <h1 className="question__title">Confirm your adress</h1>
      </div>
      <div className="container__options-fixed2">
        {/* <button type="button">
          Devuelta a formulario de adress
        </button> */}
        <div className="container__map-fixed">
          <LoadScript
            googleMapsApiKey="AIzaSyAS6FMWSxbS2AgtqmxikDQCBVpBhaJ1vuk"
          >
            <GoogleMap
              onClick={(evt) => {
                console.log('latitude= ', evt.latLng.lat());
                console.log('Longitude= ', evt.latLng.lng());
              }}
              className="container__map-fixed"
              mapContainerStyle={containerStyle}
              center={defaultProps.center}
              zoom={defaultProps.zoom}
            >
              <Marker
                lat={10.394297970724839}
                lng={-75.48149972391892}
                text="QWERTYUIOPASDFGHJKLÑZXCVBNM,"
              />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      {/* <div className="container__options-fixed2">
          <div className="container__options-scroll2">
            <form className="container__formtable">
                <input className="form__text1" placeholder="Street" type="text" />
                <input
                  className="form__text"
                  placeholder="Apt, suite,etc.(Optional)"
                  type="text"
                />
                <input className="form__text" placeholder="City" type="text" />
                <input
                  className="form__text"
                  placeholder="State(Optional)"
                  type="text"
                />
                <input
                  className="form__text"
                  placeholder="Zip code(optional)"
                  type="text"
                />
                <select className="form__countries">
                  <option className="country">Country</option>
                  <option className="country">Colombia</option>
                  <option className="country">Ecuador</option>
                  <option className="country">Chile</option>
                </select>
              </form>
            </div>
          </div> */}
      <div className="container__button-step">
        <div className="progress2" />
        <Link to="/PrivacyType">
          <button className="button__backstep" type="button">
            Back
          </button>
        </Link>
        <Link to="/FloorPlan">
          <button className="button__nextstep" type="button">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Location;

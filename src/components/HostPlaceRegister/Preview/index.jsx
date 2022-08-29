/* eslint-disable */
import { Link } from 'react-router-dom';
import './styles.scss';

const Preview = () =>
/*   const StepFinal = (props) => {
    const { registerForm } = useSelector(state => state.spaces)
  } */

/*   const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
        title:,
        img:,
        dates:,
        price: ,
        howMany:,
        adress: {
          street:,
          city:,
          state:,
          country:,
          zipCode:,
        },
        host:,
        type: {
        privacyType:
        amenities: {
          beds:,
          kitchen: [
            {
            },
          ],
          bathroom: [
            {
            },
          ],
          bedroomAndLaundry: [
            {
            },
          ],
          facilities: [
            {
            },
          ],
          entertaiment: [
            {
            },
          ],
        },
        description:
        ,
  } */
/*   return */ (
    <div>
      <div className="form__header4">
        <div className="header__logo">
          <Link to="/">
            <img
              className="logo__img"
              src="img/LogoIcon/White.png"
              alt="airbnbLogo"
            />
          </Link>
        </div>
        <div className="header__help-container4">
          <button className="header__help" type="button">
            Help
          </button>
          <button className="header__save" type="button">
            Save and exit
          </button>
        </div>
      </div>
      <div className="container__question4">
        <h1 className="question__title">
          Check out your listing!
        </h1>
      </div>
      <div className="container__options-fixed4">
        <div className="container__options-scroll5">
          <div className="container__preview">
            <p />
          </div>
        </div>
      </div>
      <div className="container__button-step">
        <div className="progress9" />
        <Link to="/Price">
          <button className="button__backstep" type="button">
            Back
          </button>
        </Link>
        <Link to="/">
          <button className="button__savelisting" type="button">
            Save your listing
          </button>
        </Link>
      </div>
    </div>
  );

export default Preview;

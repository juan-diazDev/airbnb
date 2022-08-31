/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';

const Preview = () =>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spaceRegister = useSelector((state) => state.space.spaceRegister);

  const spaceSubmit = {
    title: spaceRegister.title,
    img: spaceRegister.img,
    price: spaceRegister.price,
    howMany: spaceRegister.floorPlanState.guest,
    address: {
      street: spaceRegister.adress.street,
      city: spaceRegister.adress.city,
      state:spaceRegister.adress.state,
      country: spaceRegister.adress.country,
      zipCode: spaceRegister.adress.zipCode,
    },
    type: spaceRegister.propertyType,
    privacyType: spaceRegister.Privacy.privacyType,
    amenities: {
      beds: spaceRegister.floorPlanState.beds,
      kitchen: spaceRegister.amenitie.Kitchen,
      bathroom: spaceRegister.amenitie.Bathroom,
      bedroomAndLaundry: spaceRegister.amenitie['Bedroom and loundry'],
      facilities: spaceRegister.amenitie.Bathroom,
      entertaiment: spaceRegister.amenitie.Entertainment,
    },
    description: spaceRegister.description,
  };

  console.log('arreglofinal', spaceSubmit);

  const handleNext = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_SPACE_REGISTER', payload: { ...spaceRegister, spaceSubmit } });
    navigate('/');
  };

  return (
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
        <button onClick={handleNext} className="button__savelisting" type="button">
          Save your listing
        </button>
      </div>
    </div>
  );
}

export default Preview;

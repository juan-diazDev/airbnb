import {Link} from "react-router-dom";
import './styles.scss'

const FormContainerPrice = () =>{

  return (
      
    <div>
      <div className="form__header">

        <div className="header__logo">
          <Link to="/">
            <img className="logo__img" src="img/LogoIcon/White.png" alt="airbnbLogo"/>
          </Link>
        </div>

        <div className="header__buttons">
            <button className="button">
                Ask a Superhost            
            </button>
            <button className="button">
                Help            
            </button>
        </div>

      </div>

      <div className="form__container">

        <div className="container__question">
          <h1 className="question__title">
            Let's give your place a name
          </h1>
        </div>

        <div className="container__options">

          <div className="option__offerprice">
            <button className="offerprice__low">-</button>
              <div className="offerprice__input">
                <input className="offerprice" placeholder="$179043" type="text"/>
              </div>
            <button className="offerprice__rise">+</button>
          </div>
          
          <div className="option__pernight">
            <h2 className="pernight__description">
              Per night
            </h2>
          </div>

          <div className="option__advice">
            <h2 className="advice__description">
              Places like yours usually range from $125,878 to $209,796.
            </h2>
          </div>
          
          <div className="container__button-step">
              <Link to="/FormContainerDescriptionPlace">
                  <button className="button__backstep">Back</button>
              </Link>
              <button className="button__nextstep">Review your listing</button>
          </div>

        </div>
          
      </div>
    </div>
  )
}

export default FormContainerPrice;
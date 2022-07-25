import {Link} from "react-router-dom";
import './styles.scss'

const FormContainerTitle = () =>{

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

          <div className="option__offertitle">
            <h2 className="offertitle">Create your title</h2>
            <textarea className="offertitle__text"placeholder="cheerful 3 bedrooms house with pool" rows="3"></textarea>
          </div>

          <div className="container__button-step">
            <Link to="/FormContainerImages">
              <button className="button__backstep">Back</button>
            </Link>
            <Link to="/FormContainerDescriptionPlace">
              <button className="button__nextstep">Next</button>
            </Link>
          </div>

        </div>

      </div>
  </div>
  )
}

export default FormContainerTitle;

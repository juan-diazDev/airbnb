import {Link} from "react-router-dom";
import './styles.scss'

const FormContainerCapacity = () =>{

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

      <div class="form__container ">

          <div class="container__question ">
            <h1 class="question__title ">
              What kind of space will your guest have?
            </h1>
          </div>

        <div class="container__options">

          <button class="option">An entire place.</button>
          <button class="option">A private room.</button>
          <button class="option">A shared room.</button>

          <div className="container__button-step">
            <Link to="/FormContainerDescribe">
              <button className="button__backstep">Back</button>
            </Link>
            <Link to="/FormContainerAdress">
              <button className="button__nextstep">Next</button>
            </Link>
          </div>
          
        </div>
      </div>
        
    </div>

  )
  
}

export default FormContainerCapacity;
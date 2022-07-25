import {Link} from "react-router-dom";
import './styles.scss'

const FormContainerType = () =>{

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
            What kind of place will you host?
          </h1>
        </div>

        <div className="container__options">

          <button className="option__card0">
            <h2 className="option__card-title0">
              Apartament
            </h2>
<<<<<<< HEAD
            <img className="option__card-image0" src="images/el-hostal-bed-and-breakfast.jpg"/>
=======
            <img className="option__card-image0" src="img/Spaces/1.jpg"  alt="spaceThumbnail"/>

>>>>>>> e9f25661efc245c39f4118dff30329cfc7bdb63f
          </button>
          <button className="option__card0">
            <h2 className="option__card-title0">
              House
            </h2>
<<<<<<< HEAD
            <img className="option__card-image0" src="images/el-hostal-bed-and-breakfast.jpg"/>
=======
            <img className="option__card-image0" src="img/Spaces/1.jpg"  alt="spaceThumbnail"/>

>>>>>>> e9f25661efc245c39f4118dff30329cfc7bdb63f
          </button>
          <button className="option__card0">
            <h2 className="option__card-title0">
              Secondary unit
            </h2>
<<<<<<< HEAD
            <img className="option__card-image0" src="images/el-hostal-bed-and-breakfast.jpg"/>
=======
            <img className="option__card-image0" src="img/Spaces/1.jpg"  alt="spaceThumbnail"/>

>>>>>>> e9f25661efc245c39f4118dff30329cfc7bdb63f
          </button>
          <button className="option__card0">
            <h2 className="option__card-title0">
              Unique space
            </h2>
<<<<<<< HEAD
            <img className="option__card-image0" src="images/el-hostal-bed-and-breakfast.jpg"/>
=======
            <img className="option__card-image0" src="img/Spaces/1.jpg"  alt="spaceThumbnail"/>

>>>>>>> e9f25661efc245c39f4118dff30329cfc7bdb63f
          </button>
          <button className="option__card0">
            <h2 className="option__card-title0">
              Bed and breakfasts
            </h2>
<<<<<<< HEAD
            <img className="option__card-image0" src="images/el-hostal-bed-and-breakfast.jpg"/>
=======
            <img className="option__card-image0" src="img/Spaces/1.jpg"  alt="spaceThumbnail"/>

>>>>>>> e9f25661efc245c39f4118dff30329cfc7bdb63f
          </button>
          <button className="option__card0">
            <h2 className="option__card-title0">
              Boutique hotel
            </h2>
<<<<<<< HEAD
            <img className="option__card-image0" src="images/el-hostal-bed-and-breakfast.jpg"/>
          </button>

          <div className="container__button-step">
=======
            <img className="option__card-image0" src="img/Spaces/1.jpg"  alt="spaceThumbnail"/>
          </button>

          <div className="container__button-step1">

>>>>>>> e9f25661efc245c39f4118dff30329cfc7bdb63f
            <Link to="/FormContainerDescribe">
              <button className="button__nextstep">Next</button>
            </Link>
          </div>

        </div>

      </div>

    </div>

  )
}

export default FormContainerType;

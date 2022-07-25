import {Link} from "react-router-dom";
import './styles.scss'

const FormContainerType = () =>{

  return (

    <div>

      <div className="form__header">

        <div className="header__logo">
          <img className="logo__img" src="images/airbnblogo.png"/>
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
            <img className="option__card-image0" src="images/el-hostal-bed-and-breakfast.jpg"/>
          </button>
          <button className="option__card0">
            <h2 className="option__card-title0">
              House
            </h2>
            <img className="option__card-image0" src="images/el-hostal-bed-and-breakfast.jpg"/>
          </button>
          <button className="option__card0">
            <h2 className="option__card-title0">
              Secondary unit
            </h2>
            <img className="option__card-image0" src="images/el-hostal-bed-and-breakfast.jpg"/>
          </button>
          <button className="option__card0">
            <h2 className="option__card-title0">
              Unique space
            </h2>
            <img className="option__card-image0" src="images/el-hostal-bed-and-breakfast.jpg"/>
          </button>
          <button className="option__card0">
            <h2 className="option__card-title0">
              Bed and breakfasts
            </h2>
            <img className="option__card-image0" src="images/el-hostal-bed-and-breakfast.jpg"/>
          </button>
          <button className="option__card0">
            <h2 className="option__card-title0">
              Boutique hotel
            </h2>
            <img className="option__card-image0" src="images/el-hostal-bed-and-breakfast.jpg"/>
          </button>

          <div className="container__button-step">
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
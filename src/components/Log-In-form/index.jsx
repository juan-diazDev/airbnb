import './styles.scss'
import {Link} from "react-router-dom"

function Loginform() {


return (

  <section>
    <div className="Login__container">
      <div className="Login">
      <header className="Login_headerbox">
          <Link to = "/">
          <button className="Login__backbutton">
              <span>˂</span>  
          </button>
          </Link>
          <h1>Log In or sign up</h1>
      </header>
      <form action="" className="Login__form">
          <p className="Login__welcome">Welcome to Airbnb</p>
          <input className="Login__textbox" type="email" name="email" placeholder="Email" />
          <input className="Login__textbox" type="password" name="password" placeholder="Password" />
          <button className="Login__btn__continue"><b>Continue</b></button>
          <div className="Login__divisor">
              <p>or</p>
          </div>
          <button className="Login__btn__Signin"><b>Sign up</b></button>
      </form>
      </div>
    </div>
  </section>


)
}
export default Loginform;
import './styles.scss';
import { Link } from 'react-router-dom';

const Loginform = () => {
  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  return (

    <section>
      <div className="Login__container">
        <div className="Login">
          <header className="Login_headerbox">
            <Link to="/">
              <button className="Login__backbutton" type="button">
                <span>˂</span>
              </button>
            </Link>
            <h1>Log In or sign up</h1>
          </header>
          <form action="" className="Login__form" onSubmit={handlerSubmit}>
            <p className="Login__welcome">Welcome to Airbnb</p>
            <input className="Login__textbox" type="email" name="email" placeholder="Email" />
            <input className="Login__textbox" type="password" name="password" placeholder="Password" />
            <button className="Login__btn__continue" type="button"><b>Continue</b></button>
            <div className="Login__divisor">
              <p>or</p>
            </div>
            <Link to="/Signupform">
              <button className="Login__btn__Signin" type="button"><b>Sign up</b></button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Loginform;

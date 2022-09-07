/* eslint-disable no-console */
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import swal from 'sweetalert';
import { login } from '../../services/auth';
import './styles.scss';

const Loginform = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, profile } = await login(form);
      localStorage.setItem('token', token);
      localStorage.setItem('profile', JSON.stringify(profile));
      if (token) {
        navigate('/');
      } else {
        swal({
          title: 'Error!',
          text: 'Your user or password  is invalid',
          icon: 'error',
          button: 'Try again',
        });
        localStorage.clear();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="Login__container">
        <div className="Login">
          <header className="Login_headerbox">
            <Link to="/">
              <button className="Login__backbutton" type="button">
                <img
                  src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659723860/images/BackArrow/Dark_Gray_obpkut.png"
                  className="Login__backArrow"
                  alt="backArrow"
                />
              </button>
            </Link>
            <h1>Log In or sign up</h1>
          </header>
          <form action="" className="Login__form" onSubmit={handlerSubmit}>
            <p className="Login__welcome">Welcome to Airbnb</p>
            <input
              className="Login__textbox"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              className="Login__textbox"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <button className="Login__btn__continue" type="submit">
              <b>Continue</b>
            </button>
            <div className="Login__divisor">
              <p>or</p>
            </div>
            <Link to="/Signupform">
              <button className="Login__btn__Signin" type="button">
                <b>Sign up</b>
              </button>
            </Link>
            <div className="Login__password">
              <Link to="/PasswordForgotten">Forgot your password?</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Loginform;

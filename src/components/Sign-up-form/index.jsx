import './styles.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signup } from '../../services/auth';

const Signupform = () => {
  const navigate = useNavigate();
  const [signupform, setSignupform] = useState({});
  const handleChange = (e) => {
    setSignupform({ ...signupform, [e.target.name]: e.target.value });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(signupform);
      navigate('/verify-account');
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <section>
      <div className="signup__container">
        <div className="signup">
          <header className="signup_headerbox">
            <Link to="/">
              <button className="signup__backbutton" type="button">
                <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659723860/images/BackArrow/Dark_Gray_obpkut.png" className="signup__backArrow" alt="backArrow" />
              </button>
            </Link>
            <h2>Sign up</h2>
          </header>
          <form action="" className="signup__form" onSubmit={handlerSubmit}>
            <input
              name="name"
              className="signup__namebox"
              type="text"
              placeholder="First name"
              onChange={handleChange}
            />
            <input
              name="lastName"
              className="signup__lastnamebox"
              type="text"
              placeholder="Last name"
              onChange={handleChange}
            />
            <p className="signup__helptext">Make sure it matches the name on your government ID.</p>
            <input
              name="birthDate"
              className="signup__textbox"
              type="date"
              placeholder="Birthdate"
              onChange={handleChange}
            />
            <p className="signup__helptext">To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb.</p>
            <input
              name="email"
              className="signup__textbox"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <p className="signup__helptext">We’ll email you trip confirmations and receipts.</p>
            <input
              name="password"
              className="signup__textbox"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <p className="signup__helptext">Your password must contain at least 8 digits.</p>
            <input
              name="location"
              className="signup__textbox"
              type="location"
              placeholder="Location"
              onChange={handleChange}
            />
            <p className="signup__helptext">Use a permanent address where you can receive mail.</p>
            <input
              name="phone"
              className="signup__textbox"
              type="tel"
              placeholder="Phone Number"
              onChange={handleChange}
            />
            <p className="signup__helptext">Contact number (for confirmed guests and Airbnb to get in touch).</p>
            <select
              name="role"
              className="signup__textboxSelect"
              placeholder="Role"
              defaultValue=""
              required
              onChange={handleChange}
            >
              <option value="" disabled>Role</option>
              <option value="GUEST">Guest</option>
              <option value="HOST">Host</option>
            </select>
            <p className="signup__helptext">Choose your role (Guest/Host).</p>
            <select
              className="signup__textboxSelect"
              name="gender"
              placeholder="Gender"
              defaultValue=""
              onChange={handleChange}
            >
              <option value="" disabled>Gender</option>
              <option value="other">Other</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p className="signup__helptext">Add your Gender</p>
            <p className="signup__policies1">By selecting Agree and continue, I agree to Airbnb’s <span className="signup__policies2" target="blank">Terms of Service</span>,
              <span className="signup__policies2" target="blank"> Payments Terms of Service</span>, <span className="signup__policies2" target="blank"> Nondiscrimination Policy</span> and <span className="signup__policies2" target="blank">Colombia Privacy Supplement</span>, and acknowledge the <span className="signup__policies2" target="blank">Privacy Policy.</span>
            </p>
            <button className="signup__btn" type="submit"><b>Agree and continue</b></button>
            <p className="signup__final">Airbnb will send you members-only deals, inspiration, marketing emails, and push notifications. You can opt out of receiving these at any time in your account settings or directly from the marketing notification.
            </p>
            <div className="signup__checkbox">
              <input className="signup__checkbox__input" type="checkbox" id="radio1" />
              <p className="signup__checkbox__label">I don’t want to receive marketing messages from Airbnb.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signupform;

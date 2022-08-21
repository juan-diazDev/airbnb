import './styles.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { singup } from '../../services/auth';

const Signupform = () => {
  const [signup, setSignup] = useState({});
  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
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
            <input className="signup__namebox" type="text" name="name" placeholder="First name" />
            <input className="signup__lastnamebox" type="text" name="lastName" placeholder="Last name" />
            <p className="signup__helptext">Make sure it matches the name on your government ID.</p>
            <input className="signup__textbox" type="date" name="birthDate" placeholder="Birthdate" />
            <p className="signup__helptext">To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb.</p>
            <input className="signup__textbox" type="email" name="email" placeholder="Email" />
            <p className="signup__helptext">We’ll email you trip confirmations and receipts.</p>
            <input className="signup__textbox" type="password" name="password" placeholder="Password" />
            <p className="signup__helptext">Your password must contain at least 8 digits.</p>
            <input className="signup__textbox" type="location" name="location" placeholder="Location" />
            <p className="signup__helptext">Use a permanent address where you can receive mail.</p>
            <input className="signup__textbox" type="tel" name="phone" placeholder="Phone Number" />
            <p className="signup__helptext">Contact number (for confirmed guests and Airbnb to get in touch).</p>
            <select className="signup__textboxSelect" placeholder="Role" name="role" defaultValue="" required>
              <option value="" disabled>Role</option>
              <option value="user">Guest</option>
              <option value="host">Host</option>
            </select>
            <p className="signup__helptext">Choose your role (Guest/Host).</p>
            <select className="signup__textboxSelect" name="gender" placeholder="Gender" defaultValue="">
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

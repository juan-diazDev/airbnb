// import { useReducer } from 'react';
import PropTypes from 'prop-types';

const AccountMain = ({ user1 }) => (

  <div className="account__container">
    <div className="account-top-container--bigsc">
      <h1 className="account-acctext--bigsc"> Account </h1>
      <span className="account-top-name--bigsc">{user1.name} {user1.last_name},</span>
      <span className="account-top-email--bigsc"> {user1.email}. </span>
      <a href="https://www.airbnb.com/users/show/48369716" className="account__showprofile"> Go to profile </a>
    </div>
    <div className="account__top-container">
      <div className="account__profilePic-container">
        <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659716573/images/Account/profilepic_bo57dk.jpg" className="account__profilePic" alt="profilepic" />
      </div>
      <div className="account__name-container">
        <h1 className="account__name"> {user1.name} </h1>
      </div>
      <div className="account__showprofilecontainer">
        <a href="https://www.airbnb.com/users/show/48369716" className="account__showprofile"> Show Profile </a>
      </div>
    </div>
    <div className="account__main-container">
      <div className="account__mainDivision-container">
        <div className="account__mainLogo-container">
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659716563/images/Account/Userlogo_pyxlip.png" className="account__mainLogo" alt="userlogo" />
        </div>
        <div className="account__mainText-container">
          <div className="account__mainText">
            Personal info
          </div>
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660060560/images/Next%20Arrow/Next_mguuj8.png" className="account__nextbar" alt="nextBar" />
        </div>
        <div className="account__mainText2">
          Provide personal details and how we can reach you
        </div>
      </div>
      <div className="account__mainDivision-container">
        <div className="account__mainLogo-container">
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659716390/images/Account/Credit-card_tnxeqz.png" className="account__mainLogo" alt="userlogo" />
        </div>
        <div className="account__mainText-container">
          <div className="account__mainText">
            Payments and payouts
          </div>
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660060560/images/Next%20Arrow/Next_mguuj8.png" className="account__nextbar" alt="nextBar" />
        </div>
        <div className="account__mainText2">
          Review payments, payouts, coupons, gift cards, and taxes
        </div>
      </div>
      <div className="account__mainDivision-container">
        <div className="account__mainLogo-container">
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659716390/images/Account/Privacy_ldzsl1.png" className="account__mainLogo" alt="userlogo" />
        </div>
        <div className="account__mainText-container">
          <div className="account__mainText">
            Login and Security
          </div>
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660060560/images/Next%20Arrow/Next_mguuj8.png" className="account__nextbar" alt="nextBar" />
        </div>
        <div className="account__mainText2">
          Update your password and secure your account
        </div>
      </div>
      <div className="account__mainDouble-container">
        <h1 className="account__mainSupport">
          Support
        </h1>
        <div className="account__mainDivision-container">
          <div className="account__mainLogo-container">
            <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659716390/images/Account/Help_jvacri.png" className="account__mainLogo" alt="userlogo" />
          </div>
          <div className="account__mainText-container">
            <div className="account__mainText">
              Get help
            </div>
            <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660060560/images/Next%20Arrow/Next_mguuj8.png" className="account__nextbar" alt="nextBar" />
          </div>
          <div className="account__mainText2">
            Cancel a reservation, change a reservation, contact us
          </div>
        </div>
      </div>
      <button className="account__logout" type="button">Log out</button>
    </div>
  </div>
);

AccountMain.propTypes = {
  user1: PropTypes.shape(),
};
AccountMain.defaultProps = {
  user1: {},
};

export default AccountMain;

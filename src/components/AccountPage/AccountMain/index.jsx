// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../../../services/users';
import loadUserDetail from '../../../store/action/user';

const AccountMain = () => {
  const user = useSelector((state) => state.userDetail.userDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUser();
      dispatch(loadUserDetail(result));
    };
    fetchData();
  }, []);

  return (
    <div className="account__container">
      <div className="account-top-container--bigsc">
        <h1 className="account-acctext--bigsc"> Account </h1>
        <span className="account-top-name--bigsc">{user.name} {user.lastName},</span>
        <span className="account-top-email--bigsc"> {user.email}. </span>
        <Link to="/Profile" className="account__showprofile"> Go to profile </Link>
      </div>
      <div className="account__top-container">
        <div className="account__profilePic-container">
          <img src={user.avatar} className="account__profilePic" alt="profilepic" />
        </div>
        <div className="account__name-container">
          <h1 className="account__name"> {user.name} </h1>
        </div>
        <div className="account__showprofilecontainer">
          <Link to="/Profile" className="account__showprofile"> Show Profile </Link>
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
              Change your password
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
        <div className="account__deactivate">
          <p className="account__deactivate1">Need to deactivate your account?</p>
          <p className="account__deactivate2">Take care of that now</p>
        </div>
      </div>
    </div>
  );
};

export default AccountMain;

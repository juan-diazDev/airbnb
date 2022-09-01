/* eslint-disable no-underscore-dangle */
import './styles.scss';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUserDetail } from '../../store/action/user';
import { updateUser } from '../../services/users';
import Header from '../Header';
import AccountNavbar from '../AccountPage/AccountNavbar';

const ProfilePage = () => {
  const user = useSelector((state) => state.user.userDetail);
  const dispatch = useDispatch();
  const [editProfile, setEditProfile] = useState(false);
  const [editUser, seteditUser] = useState({});

  useEffect(() => {
    dispatch(fetchUserDetail());
  }, []);

  const id = user._id;

  const handleClick = () => {
    setEditProfile(true);
  };
  const handleClick2 = () => {
    setEditProfile(false);
  };

  const handleChange = (e) => {
    seteditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ id, ...editUser });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="profile__Container">
        <Link to="/Account">
          <div className="profile__backButton">
            <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659723860/images/BackArrow/Dark_Gray_obpkut.png" className="profile__backArrow" alt="backArrow" />
          </div>
        </Link>
        <form action="" onSubmit={handleSubmit} className="profile__main-container">
          <div className="profile__personalInfo">
            <div className="profile__profilePic-container">
              <img src={user.avatar} className="profile__profilePic" alt="profilepic" />
            </div>
            <div className="profile__userinfo">
              <h2>Hi, I’m {user.name}</h2>
              <span className="profile__joinedinfo">Joined in {user.createdAt}</span>
              <div className="profile__edit">
                <button className="profile_editButton" type="button" onClick={handleClick}> Edit profile </button>
                <Link to="/Profile/Updatephoto">
                  <button className="profile_editButton" type="button"> Update Photo </button>
                </Link>
              </div>
            </div>
          </div>
          <section className="profile__Section-container">
            <h2 className="profile__aboutText">About</h2>
            {
              editProfile
                ? <textarea id="about" name="about" rows="4" cols="20" onChange={handleChange} />
                : <span className="profile__aboutContent">{user.about}.</span>
            }
            <div className="profile__sectionInfo">
              <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660062280/images/Account/Casa_dnmdet.png" className="profile__icon" alt="starlogo" />
              {
              editProfile
                ? <input id="location" name="location" className="profile__editLocation" placeholder="Add your location" onChange={handleChange} />
                : <span className="profile__aboutSubText">Lives in {user.location}</span>
              }
            </div>
            <div className="profile__sectionInfo">
              <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660063891/images/Account/Dialogo_mgikls.png" className="profile__icon" alt="starlogo" />
              {
              editProfile
                ? (
                  <div className="profile__languajes">
                    <select type="button" name="languajes" className="profile__languajesSelect" onChange={handleChange}>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                    </select>
                  </div>
                )
                : <span className="profile__aboutSubText">Speaks {user.languajes}</span>
              }
            </div>
            {
              editProfile
                ? (
                  <div className="profile__CancelorSave">
                    <button type="button" className="profile__cancelEditInfo1" onClick={handleClick2}>Cancel</button>
                    <button type="submit" className="profile__cancelEditInfo2">Save</button>
                  </div>
                )
                : null
              }
          </section>
          <section className="profile__Section-container">
            <h2 className="profile__aboutText">{user.name} confirmed</h2>
            <div className="profile__sectionInfo">
              <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660066918/images/Account/Checked_ynqmmi.png" className="profile__icon" alt="checklogo" />
              <span className="profile__aboutSubText">Identity</span>
            </div>
            <div className="profile__sectionInfo">
              <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660066918/images/Account/Checked_ynqmmi.png" className="profile__icon" alt="checklogo" />
              <span className="profile__aboutSubText">Email adress</span>
            </div>
            <div className="profile__sectionInfo">
              <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660066918/images/Account/Checked_ynqmmi.png" className="profile__icon" alt="checklogo" />
              <span className="profile__aboutSubText">Phone number</span>
            </div>
          </section>
          <p className="profile__reviews">Reviews by you</p>
        </form>
        <form className="profile__container-bigSc" onSubmit={handleSubmit}>
          <div className="profile__leftContainer-bigSc">
            <div className="profile__profilePic-container-bigSc">
              <img src={user.avatar} className="profile__profilePic-biSc" alt="profilepic" />
              <Link to="/Profile/Updatephoto">
                <button className="profile_editButton" type="button"> Update Photo </button>
              </Link>
            </div>
            <section className="profile__Section-container-bigSC">
              <h2 className="profile__aboutText">{user.name} confirmed</h2>
              <div className="profile__sectionInfo">
                <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660066918/images/Account/Checked_ynqmmi.png" className="profile__icon" alt="checklogo" />
                <span className="profile__aboutSubText">Identity</span>
              </div>
              <div className="profile__sectionInfo">
                <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660066918/images/Account/Checked_ynqmmi.png" className="profile__icon" alt="checklogo" />
                <span className="profile__aboutSubText">Email adress</span>
              </div>
              <div className="profile__sectionInfo">
                <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660066918/images/Account/Checked_ynqmmi.png" className="profile__icon" alt="checklogo" />
                <span className="profile__aboutSubText">Phone number</span>
              </div>
            </section>
          </div>
          <div className="profile__rightContainer-bigSc">
            <div className="profile__userinfo-bigSc">
              <h2>Hi, I’m {user.name}</h2>
              <span className="profile__joinedinfo">Joined in {user.createdAt} </span>
              <button className="profile_editButton" type="button" onClick={handleClick}> Edit profile </button>
            </div>
            <section className="profile__Section-container2-bigSc">
              <h2 className="profile__aboutText">About</h2>
              {
              editProfile
                ? <textarea id="about" name="about" rows="6" cols="60" onChange={handleChange} />
                : <span className="profile__aboutContent">{user.about}.</span>
              }
              <div className="profile__sectionInfo">
                <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660062280/images/Account/Casa_dnmdet.png" className="profile__icon" alt="starlogo" />
                {
                editProfile
                  ? <input id="location" name="location" className="profile__editLocation" placeholder="Add your location" onChange={handleChange} />
                  : <span className="profile__aboutSubText">Lives in {user.location}</span>
                }
              </div>
              <div className="profile__sectionInfo">
                <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660063891/images/Account/Dialogo_mgikls.png" className="profile__icon" alt="starlogo" />
                {
              editProfile
                ? (
                  <div className="profile__languajes">
                    <select type="button" name="languajes" className="profile__languajesSelect" onChange={handleChange}>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                    </select>
                  </div>
                )
                : <span className="profile__aboutSubText">Speaks {user.languajes}</span>
              }
              </div>
              {
            editProfile
              ? (
                <div className="profile__CancelorSave">
                  <button type="button" className="profile__cancelEditInfo1" onClick={handleClick2}>Cancel</button>
                  <button type="submit" className="profile__cancelEditInfo2">Save</button>
                </div>
              )
              : null
            }
            </section>
            <p className="profile__reviews">Reviews by you</p>
          </div>
        </form>
      </div>
      <AccountNavbar />
    </>
  );
};

export default ProfilePage;

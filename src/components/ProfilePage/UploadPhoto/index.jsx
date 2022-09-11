/* eslint-disable no-underscore-dangle */
import './styles.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { fetchUserDetail } from '../../../store/action/user';
import { updateUser } from '../../../services/users';
import Header from '../../Header';
import AccountNavbar from '../../AccountPage/AccountNavbar/index';

const BASE_URL = process.env.REACT_APP_LOCAL_URL;

const UpdatePhoto = () => {
  const user = useSelector((state) => state.user.userDetail);
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();
  const id = user._id;

  useEffect(() => {
    dispatch(fetchUserDetail());
  }, []);

  const handleChange = (e) => {
    setFile(e.target.files[0]);

    const isValidSize = e.target.files[0].size < 2 * 1024 * 1024;
    const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i;
    const isValidType = isNameOfOneImageRegEx.test(e.target.files[0].name);

    if (!isValidSize) {
      swal({
        title: 'Error!',
        text: 'Image exceeds the allowed size',
        icon: 'error',
      });
    }

    if (!isValidType) {
      swal({
        title: 'Error!',
        text: 'Invalid type of image',
        icon: 'error',
      });
      setTimeout(() => {
        window.location.reload();
      }, 900);
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleUploadPhoto = async () => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('filename', file.name);

    const payload = {
      method: 'POST',
      body: formData,
    };

    try {
      const response = await fetch(`${BASE_URL}/api/upload/file`, payload);
      const data = await response.json();
      await updateUser({ id, avatar: data.url });
    } catch (error) {
      console.log(error);
    }
    navigate('/profile');
  };

  return (
    <>
      <Header />
      <form className="profile__uploadPhotoform">
        <nav className="uploadPhoto__Navbar">
          <Link to="/profile" className="profile__uploadPhotoBack">Profile</Link>
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660060560/images/Next%20Arrow/Next_mguuj8.png" className="uploadPhoto__nextbar" alt="nextBar" />
          <span>Profile photos</span>
        </nav>
        <h1 className="profile__uploadPhotoDescription">
          <div>Profile Photos</div>
        </h1>
        <div className="profile__uploadPhotoContainer">
          <div className="profile__uploadPhototitle">
            Profile photo
          </div>
          {
            file
              ? (
                <>
                  <div className="profile__uploadPhotoimage-Container">
                    <img className="profile__photo" src={avatar} alt="" />
                  </div>
                  <button className="profile__uploadPhoto-Button" type="button" onClick={handleUploadPhoto}>Save profile Picture</button>
                </>
              )
              : (
                <>
                  <div className="profile__uploadPhotoimage-Container">
                    <img className="profile__photo" src={user.avatar} alt="" />
                  </div>
                  <input type="file" name="avatar" className="profile__uploadPhoto-input" id="avatar" onChange={handleChange} accept=".jpg, .jpeg, .gif, .png" />
                </>
              )
          }
        </div>
      </form>
      <AccountNavbar />
    </>
  );
};

export default UpdatePhoto;

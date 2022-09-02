/* eslint-disable no-underscore-dangle */
import './styles.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchUserDetail } from '../../../store/action/user';
import { updateUser } from '../../../services/users';
import Header from '../../Header';

const BASE_URL = process.env.REACT_APP_LOCAL_URL;

const UpdatePhoto = () => {
  const user = useSelector((state) => state.user.userDetail);
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const id = user._id;

  useEffect(() => {
    dispatch(fetchUserDetail());
  }, []);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
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
      setAvatar(data.url);
      await updateUser({ id, avatar: data.url });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <form className="profile__uploadPhotoform">
        <nav className="uploadPhoto__Navbar">
          <Link to="/Profile" className="profile__uploadPhotoBack">Profile</Link>
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
          <div className="profile__uploadPhotoimage-Container">
            <input type="file" name="avatar" id="avatar" onChange={handleChange} accept="image/*" />
            <img className="profile__photo" src={avatar} alt="" />
          </div>
          <button className="profile__uploadPhoto-Button" type="button" onClick={handleUploadPhoto}>Upload a file from your computer</button>
        </div>
      </form>
    </>
  );
};

export default UpdatePhoto;

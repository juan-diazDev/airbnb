import './styles.scss';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useState } from 'react';
import Header from '../../Header';

const UpdatePhoto = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.file);
  };

  const handleUploadPhoto = async () => {
    const formData = new FormData();
    console.log(formData);

    formData.append('file', file);
    formData.append('filename', file.name);
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
          </div>
          <button className="profile__uploadPhoto-Button" type="submit" onClick={handleUploadPhoto}>Upload a file from your computer</button>
        </div>
      </form>
    </>
  );
};

export default UpdatePhoto;

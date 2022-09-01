import './styles.scss';
import { Link } from 'react-router-dom';
import Header from '../../Header';

const UpdatePhoto = () => (
  // const [uploadImage, setUploadImage] = useState(false);
  // const [file, setFile] = useState(null);
  // const [avatar, setAvatar] = useState(null);

  // const handleClick = () => {
  //   setUploadImage(true);
  // };

  // const handleChange = (e) => {
  //   setFile(e.target.avatar);
  // };

  // const handleUploadPhoto = async () => {
  //   const formData = new FormData();
  //   console.log(formData);

  //   formData.append('file', file);
  //   formData.append('filename', file.name);

  //   const payload = {
  //     method: 'POST',
  //     body: formData,
  //   };

  //   try {
  //     const response = await fetch(`${BASE_URL}/api/upload/file`, payload);
  //     const data = await response.json();
  //     setAvatar(data.url);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
          <img src="" alt="profilePic" />
        </div>
        <button className="profile__uploadPhoto-Button" type="submit">Upload a file from your computer</button>
      </div>
    </form>
  </>
);

export default UpdatePhoto;

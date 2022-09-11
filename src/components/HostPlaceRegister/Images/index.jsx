import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import swal from 'sweetalert';

const Images = () => {
  const BASE_URL = process.env.REACT_APP_LOCAL_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spaceRegister = useSelector((state) => state.space.spaceRegister);

  const [img, setImg] = useState([]);

  const handleChangeFile = async (evt) => {
    const { files } = evt.target;
    const formData = new FormData();

    for (let i = 0; i < files.length; i += 1) {
      formData.append('files', files[i]);
    }

    const payload = {
      method: 'POST',
      body: formData,
    };

    try {
      const response = await fetch(`${BASE_URL}/api/upload/files`, payload);
      const data = await response.json();
      if (data.length) {
        const urls = data.map((image) => image.url);
        setImg(urls);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    dispatch({ type: 'SET_SPACE_REGISTER', payload: { ...spaceRegister, img } });
    if (img.length > 1) {
      navigate('/title');
    } else {
      swal({
        title: 'Error!',
        text: 'You have to upload at least one image',
        icon: 'error',
        button: 'Upload',
      });
    }
  };

  return (
    <div>
      <div className="form__header">
        <div className="header__logo">
          <Link to="/">
            <img
              className="logo__img"
              src="img/LogoIcon/White.png"
              alt="airbnbLogo"
            />
          </Link>
        </div>
        <div className="header__help-container">
          <button className="header__help" type="button">
            Help
          </button>
          <Link to="/">
            <button className="header__save" type="button">
              Exit
            </button>
          </Link>
        </div>
      </div>
      <div className="container__question3">
        <h1 className="question__title">
          Next, let`s add some photos of your place
        </h1>
      </div>
      <div className="container__options-fixed3">
        <div className="container__options-scroll3">
          <div className="images__space">
            <div className="upload__images-icon">
              <img
                className="img_icon"
                src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660067519/images/ImagesIcon/Images_i7j85n.png"
                alt="imgIconUpload"
              />
            </div>
            <h2 className="upload__title">Drag your photos here<br />or click to</h2>
            <div className="select__button-container">
              <input type="file" name="file" id="file" onChange={handleChangeFile} multiple accept="image/*" />
            </div>
            <div className="upload_files">
              {
                img.length > 1
                  ? <p className="p">Your images has been successfully uploaded!</p>
                  : null
              }
            </div>
          </div>
        </div>
      </div>
      <div className="container__button-step">
        <div className="progress5" />
        <Link to="/amenities">
          <button className="button__backstep" type="button">
            Back
          </button>
        </Link>
        <button onClick={handleNext} className="button__nextstep" type="button">
          Next
        </button>
      </div>
    </div>
  );
};
export default Images;

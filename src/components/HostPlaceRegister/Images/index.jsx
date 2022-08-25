/* eslint-disable no-constant-condition */
/* eslint-disable no-console */
/* eslint-disable */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Images = () => {
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);

  const handleChangeFile = (evt) => {
    setFile(evt.target.files);
    console.log(evt.target.files);
  };

  const handleClickUpload = async () => {
    const formData = new FormData();

    for (let i= 0; i < file.length; i++){
      formData.append('files', file[i])
    }


    const payload = {
      method: 'POST',
      body: formData,
    };

    try {
      const response = await fetch('http://localhost:8080/api/upload/files', payload);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
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
          <button className="header__save" type="button">
            Save and exit
          </button>
        </div>
      </div>
      <div className="container__question3">
        <h1 className="question__title">
          How many guest would you like to welcome?
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
            <h2 className="upload__title">Drag your photos here<br/>or click to</h2>
            <div className="select__button-container">
              <input type="file" name="file" id="file" onChange={handleChangeFile} multiple accept="image/*" />
              <button className="select__button" type="button"> Select your images</button>
            </div>
            <h3 className="upload__description">Add at least 5 photos</h3>
            <div className='upload_files'>
              { file ? <p>You have selected {file.length} images, click down below to upload!</p>: <p>You have not selected any files yet</p> }
            </div>
            <button className="upload__button" type="button" onClick={handleClickUpload}>Upload your images</button>
          </div>
        </div>
      </div>
      <div className="container__button-step">
        <div className="progress5" />
        <Link to="/Amenities">
          <button className="button__backstep" type="button">
            Back
          </button>
        </Link>
        <Link to="/Title">
          <button className="button__nextstep" type="button">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Images;

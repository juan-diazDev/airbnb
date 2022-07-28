import { Link } from 'react-router-dom';
import './styles.scss';

const FormContainerImages = () => (
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
      <div className="header__buttons">
        <button className="button" type="button">Ask a Superhost</button>
        <button className="button" type="button">Help</button>
      </div>
    </div>

    <div className="form__container">
      <div className="container__question">
        <h1 className="question__title">
          Next, let’s add some photos of your place
        </h1>
      </div>

      <div className="container__images">
        <div className="images__space">
          <div className="upload__images-icon">
            <img
              className="img_icon"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogIDxwYXRoIGQ9Im0xNzYuMjEgMTYzLjAzaDM5OS41OGM3LjM2MzMgMCAxMy4zMjQgNS45NjQ4IDEzLjMyNCAxMy4zMjR2Mzk5LjU4YzAgNy4zNTU1LTUuOTYwOSAxMy4zMTYtMTMuMzIgMTMuMzE2aC0zOTkuNTljLTcuMzU1NSAwLTEzLjMxNi01Ljk2MDktMTMuMzE2LTEzLjMxNnYtMzk5LjU4YzAtNy4zNTk0IDUuOTYwOS0xMy4zMjQgMTMuMzE2LTEzLjMyNHptMTMuMzIgMzk5LjU5aDM3Mi45NXYtNTMuMjc3aC0zNzIuOTV6bTAtNzkuOTE4aDM3Mi45NXYtMjkzLjAzaC0zNzIuOTV6Ii8+CiAgPHBhdGggZD0ibTIxNi43MiA0NDMuMTJjLTAuNzE4NzUgOS4yMTQ4IDMuNjc1OCAxMy41MiAxMy42MDIgMTIuOTQxaDI5MS43OGM3LjMyODEgMCAxMy43NjYtNC4zMzIgMTMuODA5LTEyLjYxM2wtNjcuOTkyLTY4LjQzNGMtOC4zNzExLTguNjcxOS0xMy4wMi0xMC4yNDItMjMuNzkzLTAuMjE0ODRsLTU3Ljk4OCA0Ny42NDFjLTUuNTcwMyA0Ljc1NzgtMTMuNDIyIDMuNjQwNi0xNy40NDUtMi40NzY2bC01OS44NzEtOTguMDMxYy04LjU4Mi0xMi43MDMtMTcuNzctMTIuOTg0LTI0LjkzNC0wLjI2OTUzeiIvPgogIDxwYXRoIGQ9Im01MDkuNDQgMjY4LjMyYzAgMTQuNzE1LTExLjkyNiAyNi42NDEtMjYuNjQxIDI2LjY0MXMtMjYuNjQxLTExLjkzLTI2LjY0MS0yNi42NDFjMC0xNC43MTEgMTEuOTMtMjYuNjQxIDI2LjY0MS0yNi42NDFzMjYuNjQxIDExLjkzIDI2LjY0MSAyNi42NDF6Ii8+CiA8L2c+Cjwvc3ZnPgo="
              alt="imgIconUpload"
            />
          </div>
          <h2 className="upload__title">Drag your photos here</h2>
          <h3 className="upload__description">Add at least 5 photos</h3>
          <button className="upload_button" type="button">Upload from your device</button>
        </div>

        <div className="container__button-step">
          <Link to="/FormContainerAdditions">
            <button className="button__backstep" type="button">Back</button>
          </Link>
          <Link to="/FormContainerTitle">
            <button className="button__nextstep" type="button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default FormContainerImages;

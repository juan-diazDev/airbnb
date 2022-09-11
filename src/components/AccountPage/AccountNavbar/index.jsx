import { Link } from 'react-router-dom';

const AccountNavbar = () => (
  <div className="navbar__container">
    <div className="navbar__icons">
      <button className="navbar__buttons" type="button">
        <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659662866/images/SearchIcons/Gray_szgtyb.png" className="navbar__icon" alt="searchicon" />
      </button>
    </div>
    <div className="navbar__icons">
      <Link to="/">
        <button className="navbar__buttons" type="button">
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659662837/images/LogoIcon/Gray_fjx1ec.png" className="navbar__icon" alt="homeicon" />
        </button>
      </Link>
    </div>
    <div className="navbar__icons">
      <Link to="/profile">
        <button className="navbar__buttons" type="button">
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659736178/images/Account/Pink-user_atwtje.png" className="navbar__profileIcon" alt="profileicon" />
        </button>
      </Link>
    </div>
  </div>
);

export default AccountNavbar;

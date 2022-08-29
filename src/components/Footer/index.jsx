import './style.scss';
import { Link, useNavigate } from 'react-router-dom';

import AccountNavbar from '../AccountPage/AccountNavbar';

const Footer = () => {
  const navigate = useNavigate();

  const result = localStorage.getItem('profile');
  const profile = JSON.parse(result);

  const handleClick = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <footer className="footer">
      <div className="footer__call-to-action-conatiner">
        {
          profile
            ? <AccountNavbar />
            : (
              <Link to="/Loginform">
                <button type="button" className="footer__call-to-action">
                  <strong>Log-in</strong>
                </button>
              </Link>
            )
        }
      </div>
      <div className="footer__bg-screen-container">
        <div className="footer__left-container">
          <div>© 2022, Equipo Maravilla</div>
          <div>
            <Link to="/Privacity">
              Privacity
            </Link>
          </div>
        </div>
        {
          profile
            ? (
              <div className="footer__right-container">
                <div>
                  <Link to="/" onClick={handleClick}>Log-out</Link>
                </div>
                <div>
                  <Link to="/Account">Profile</Link>
                </div>
              </div>
            )
            : (
              <div className="footer__right-container">
                <div>
                  <Link to="/Loginform">Log-in</Link>
                </div>
                <div>
                  <Link to="/Signupform">Sing-up</Link>
                </div>
              </div>
            )
        }

      </div>
    </footer>
  );
};

export default Footer;

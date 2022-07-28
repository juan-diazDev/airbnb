import './styles.scss';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
    <div className="menu__hosting-link"><Link to="/FormContainerType" className="menu__item__link"> <strong>Become a host</strong></Link></div>
    <div className="menu--queri-bgscreen">
      <ul className="nav-menu">
        <li>
          <div className="menu__icon-container">
            <div className="menu__icon" />
            <div className="menu__icon" />
            <div className="menu__icon" />
          </div>
          <ul className="menu__item">
            <li><Link to="/Signupform" className="menu__item__link">Sing up</Link></li>
            <li><Link to="/Loginform" className="menu__item__link">Log in</Link></li>
            <li><Link to="/FormContainerType" className="menu__item__link">Host your home</Link></li>
            <hr className="menu__line" />
            <li><Link to="/" className="menu__item__link">Contact</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </>
);

export default Menu;

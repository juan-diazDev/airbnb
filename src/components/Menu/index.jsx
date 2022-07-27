import './styles.scss';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
    <div className="menu__hosting-link"><Link to="/FormContainerType"> <strong>Become a host</strong></Link></div>
    <div className="menu--queri-bgscreen">
      <ul className="nav-menu">
        <li>
          <div className="menu__icon-container">
            <div className="menu__icon"></div>
            <div className="menu__icon"></div>
            <div className="menu__icon"></div>
          </div>
          <ul className="menu__item">
            <li><Link to="/Signupform" >Sing up</Link></li>
            <li><Link to="/Loginform" >Log in</Link></li>
            <li><Link to="/FormContainerType" >Host your home</Link></li>
            <hr className="menu__line" />
            <li><Link to="/" >Contact</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </>
);

export default Menu;

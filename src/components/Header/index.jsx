import { Link } from 'react-router-dom';
import Menu from '../Menu';
import Searcher from '../Searcher';
import './style.scss';

const Header = () => (
  <header className=" header header--bgscreen">
    <div className="container-logo">
      <Link to="/">
        <img src="https://res.cloudinary.com/juanito-om/image/upload/v1659639597/img/Logo/Pink_sc84gi.png" alt="airbnb-logo" className="container-logo__logo" />
      </Link>
    </div>
    <Searcher />
    <Menu />
  </header>
);

export default Header;

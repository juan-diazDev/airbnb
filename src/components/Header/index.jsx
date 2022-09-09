import Hero from './Hero';
import NavMenu from './NavMenu';

import './style.scss';

const Header = () => (
  window.location.pathname !== '/'
    ? <NavMenu />
    : <Hero />
);

export default Header;

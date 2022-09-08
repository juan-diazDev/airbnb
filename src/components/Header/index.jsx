import Hero from './Hero';
import NavMenu from './NavMenu';

import './style.scss';

const Header = () => {
  const result = localStorage.getItem('profile');
  const profile = JSON.parse(result);

  const role = profile?.role;

  return (
    window.location.pathname !== '/' || role === 'HOST'
      ? <NavMenu />
      : <Hero />
  );
};

export default Header;

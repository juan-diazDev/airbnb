import { Link } from 'react-router-dom';

import Menu from '../Menu';
import Searcher from '../Searcher';

const Hero = () => (
  <header className="header header--bgscreen">
    <div className="container-logo">
      <Link to="/">
        <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659662807/images/Logo/Pink_lmr4oj.png" alt="airbnb-logo" className="container-logo__logo" />
      </Link>
    </div>
    <Searcher />
    <Menu />
    <div className="header__hero__text">
      <h1>Get-out and stretch your imagination</h1>
    </div>
  </header>
);

export default Hero;

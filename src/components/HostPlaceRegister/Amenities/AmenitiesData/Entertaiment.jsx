import { useState } from 'react';
import amenities from './amenitiesIcons';

const {
  entertaiment,
} = amenities;

const Entertaiment = () => {
  const [entertaimentStaff, setEntertaimentStaff] = useState({});

  const handleClick = (e) => {
    setEntertaimentStaff({ ...entertaimentStaff, [e.target.name]: e.target.value });
  };

  return (
    <section className="amenities__section">
      <h2 className="amenities__title">{entertaiment.title}</h2>
      <button type="button" name="Wi-Fi" value="Wi-Fi" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Wi-Fi</div>
        <div className="amenities__article__image-container">
          <img src={entertaiment.wiFi} alt="Wi-Fi" />
        </div>
      </button>

      <button type="button" name="Tv" value="Tv" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Tv</div>
        <div className="amenities__article__image-container">
          <img src={entertaiment.tv} alt="Tv" />
        </div>
      </button>

      <button type="button" name="Netflix" value="Netflix" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Netflix</div>
        <div className="amenities__article__image-container">
          <img src={entertaiment.netflix} alt="Netflix" />
        </div>
      </button>

      <button type="button" name="Videogame console" value="Videogame console" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Videogame console</div>
        <div className="amenities__article__image-container">
          <img src={entertaiment.video_game_console} alt="Videogame console" />
        </div>
      </button>
    </section>
  );
};

export default Entertaiment;

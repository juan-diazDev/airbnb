import { useState } from 'react';
import amenities from './amenitiesIcons';

const {
  bathroom,
} = amenities;

const Bathroom = () => {
  const [bathroomStaff, setBathroomStaff] = useState({});

  const handleClick = (e) => {
    setBathroomStaff({ ...bathroomStaff, [e.target.name]: e.target.value });
  };

  return (
    <section className="amenities__section">
      <h2 className="amenities__title">{bathroom.title}</h2>
      <button type="button" name="Body soap" value="Body soap" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Body soap</div>
        <div className="amenities__article__image-container">
          <img src={bathroom.body_soap} alt="Body soap" />
        </div>
      </button>

      <button type="button" name="Shampoo" value="Shampoo" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Shampoo</div>
        <div className="amenities__article__image-container">
          <img src={bathroom.shampoo} alt="shampoo" />
        </div>
      </button>

      <button type="button" name="Toilet paper" value="Toilet paper" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Toilet paper</div>
        <div className="amenities__article__image-container">
          <img src={bathroom.toilet_paper} alt="toilet_paper" />
        </div>
      </button>
    </section>
  );
};

export default Bathroom;

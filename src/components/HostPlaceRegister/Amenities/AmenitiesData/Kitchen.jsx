import { useState } from 'react';
import amenities from './amenitiesIcons';

const {
  kitchen,
} = amenities;

const Kitchen = () => {
  const [kitchenStaff, setKitchenStaff] = useState({});

  const handleClick = (e) => {
    setKitchenStaff({ ...kitchenStaff, [e.target.name]: e.target.value });
  };

  return (
    <section className="amenities__section">
      <h2 className="amenities__title">{kitchen.title}</h2>
      <button type="button" name="Oven" value="Oven" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Oven</div>
        <div className="amenities__article__image-container">
          <img src={kitchen.oven} alt="oven" />
        </div>
      </button>

      <button type="button" name="Refrigerator" value="Refrigerator" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Refrigerator</div>
        <div className="amenities__article__image-container">
          <img src={kitchen.refrigerator} alt="refrigerator" />
        </div>
      </button>

      <button type="button" name="Cooking basics" value="Cooking basics" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Cooking basics</div>
        <div className="amenities__article__image-container">
          <img src={kitchen.cooking_basics} alt="cooking_basics" />
        </div>
      </button>

      <button type="button" name="Dishes and silverware" value="Dishes and silverware" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Dishes and silverware</div>
        <div className="amenities__article__image-container">
          <img src={kitchen.dishes_and_silverware} alt="dishes_and_silverware" />
        </div>
      </button>

      <button type="button" name="Stove" value="Stove" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Stove</div>
        <div className="amenities__article__image-container">
          <img src={kitchen.stove} alt="stove" />
        </div>
      </button>

      <button type="button" name="Rice maker" value="Rice maker" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Rice maker</div>
        <div className="amenities__article__image-container">
          <img src={kitchen.rice_maker} alt="rice_maker" />
        </div>
      </button>

      <button type="button" name="Dining table" value="Dining table" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Dining table</div>
        <div className="amenities__article__image-container">
          <img src={kitchen.dining_table} alt="dining_table" />
        </div>
      </button>

      <button type="button" name="Outdoor dining area" value="Outdoor dining area" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Outdoor dining area</div>
        <div className="amenities__article__image-container">
          <img src={kitchen.oven} alt={kitchen.title} />
        </div>
      </button>
    </section>
  );
};

export default Kitchen;

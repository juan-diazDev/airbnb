import { useState } from 'react';
import amenities from './amenitiesIcons';

const {
  bedroomAndLaundry,
} = amenities;

const BedroomAndLaundry = () => {
  const [bedroomAndLaundryStaff, setBedroomAndLaundryStaff] = useState({});

  const handleClick = (e) => {
    setBedroomAndLaundryStaff({ ...bedroomAndLaundryStaff, [e.target.name]: e.target.value });
  };

  return (
    <section className="amenities__section">
      <h2 className="amenities__title">{bedroomAndLaundry.title}</h2>
      <button type="button" name="Towels" value="Towels" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Towels</div>
        <div className="amenities__article__image-container">
          <img src={bedroomAndLaundry.towels} alt="Towels" />
        </div>
      </button>

      <button type="button" name="Bed sheets" value="Bed sheets" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Bed sheets</div>
        <div className="amenities__article__image-container">
          <img src={bedroomAndLaundry.bed_sheets} alt="Bed sheets" />
        </div>
      </button>

      <button type="button" name="Pillows" value="Pillows" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Pillows</div>
        <div className="amenities__article__image-container">
          <img src={bedroomAndLaundry.pillows} alt="Pillows" />
        </div>
      </button>

      <button type="button" name="Blanket" value="Blanket" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Blanket</div>
        <div className="amenities__article__image-container">
          <img src={bedroomAndLaundry.blanket} alt="Blanket" />
        </div>
      </button>
    </section>
  );
};

export default BedroomAndLaundry;

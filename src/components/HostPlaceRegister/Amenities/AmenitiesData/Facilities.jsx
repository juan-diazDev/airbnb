import { useState } from 'react';
import amenities from './amenitiesIcons';

const {
  facilities,
} = amenities;

const Facilities = () => {
  const [facilitiesStaff, setFacilitiesStaff] = useState({});

  const handleClick = (e) => {
    setFacilitiesStaff({ ...facilitiesStaff, [e.target.name]: e.target.value });
  };

  return (
    <section className="amenities__section">
      <h2 className="amenities__title">{facilities.title}</h2>
      <button type="button" name="Private pool" value="Private pool" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Private pool</div>
        <div className="amenities__article__image-container">
          <img src={facilities.private_pool} alt="Private pool" />
        </div>
      </button>

      <button type="button" name="Private hot tub" value="Private hot tub" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Private hot tub</div>
        <div className="amenities__article__image-container">
          <img src={facilities.private_hot_tub} alt="Private hot tub" />
        </div>
      </button>

      <button type="button" name="Building staff" value="Building staff" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">Building staff</div>
        <div className="amenities__article__image-container">
          <img src={facilities.building_staff} alt="Building staff" />
        </div>
      </button>

      <button type="button" name="BBQ grill" value="BBQ grill" onClick={handleClick} className="amenities__article-container">
        <div className="amenities__article__title">BBQ grill</div>
        <div className="amenities__article__image-container">
          <img src={facilities.bbq_grill} alt="BBQ grill" />
        </div>
      </button>
    </section>
  );
};

export default Facilities;

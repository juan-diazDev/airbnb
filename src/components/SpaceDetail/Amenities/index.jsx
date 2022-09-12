import amenities from '../../HostPlaceRegister/Amenities/AmenitiesData/amenitiesIcons';
import './styles.scss';

const Amenities = () => {
  const {
    kitchen,
    bathroom,
    facilities,
    bedroomAndLaundry,
    entertaiment,
  } = amenities;

  return (
    <main className="details__amenities__sections-container">
      <section className="details__amenities__section__item-container">
        <h3>{kitchen.title}</h3>
        <article>
          <div className="details__amenities__section__item__image">
            <img src={kitchen.stove} alt="stove" />
          </div>
          <p>Stove</p>
        </article>

        <article>
          <div className="details__amenities__section__item__image">
            <img src={kitchen.refrigerator} alt="refrigerator" />
          </div>
          <p>Refrigerator</p>
        </article>

        <article>
          <div className="details__amenities__section__item__image">
            <img src={kitchen.dishes_and_silverware} alt="dishes_and_silverware" />
          </div>
          <p>Dishes and silverware</p>
        </article>
      </section>

      <hr className="spaceDetail__line-separation" />

      <section className="details__amenities__section__item-container">
        <h3>{bathroom.title}</h3>
        <article>
          <div className="details__amenities__section__item__image">
            <img src={bathroom.body_soap} alt="" />
          </div>
          <p>Body soap</p>
        </article>

        <article>
          <div className="details__amenities__section__item__image">
            <img src={bathroom.toilet_paper} alt="toilet_paper" />
          </div>
          <p>Toilet paper</p>
        </article>
      </section>

      <hr className="spaceDetail__line-separation" />

      <section className="details__amenities__section__item-container">
        <h3>{facilities.title}</h3>
        <article>
          <div className="details__amenities__section__item__image">
            <img src={facilities.private_pool} alt="private_pool" />
          </div>
          <p>Private pool</p>
        </article>

        <article>
          <div className="details__amenities__section__item__image">
            <img src={facilities.building_staff} alt="building_staff" />
          </div>
          <p>Building staff</p>
        </article>
      </section>

      <hr className="spaceDetail__line-separation" />

      <section className="details__amenities__section__item-container">
        <h3>{bedroomAndLaundry.title}</h3>
        <article>
          <div className="details__amenities__section__item__image">
            <img src={bedroomAndLaundry.towels} alt="towels" />
          </div>
          <p>Towels</p>
        </article>

        <article>
          <div className="details__amenities__section__item__image">
            <img src={bedroomAndLaundry.bed_sheets} alt="bed_sheets" />
          </div>
          <p>Bed sheets</p>
        </article>

        <article>
          <div className="details__amenities__section__item__image">
            <img src={bedroomAndLaundry.pillows} alt="pillows" />
          </div>
          <p>Pillows</p>
        </article>
      </section>

      <hr className="spaceDetail__line-separation" />

      <section className="details__amenities__section__item-container">
        <h3>{entertaiment.title}</h3>
        <article>
          <div className="details__amenities__section__item__image">
            <img src={entertaiment.wiFi} alt="wiFi" />
          </div>
          <p>wiFi</p>
        </article>

        <article>
          <div className="details__amenities__section__item__image">
            <img src={entertaiment.tv} alt="tv" />
          </div>
          <p>TV</p>
        </article>
      </section>
    </main>
  );
};

export default Amenities;

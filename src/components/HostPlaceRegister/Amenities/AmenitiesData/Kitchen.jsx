import amenities from './amenitiesIcons';

const {
  kitchen,
} = amenities;

const Kitchen = () => (
  <section className="amenities__section">
    <h3 className="amenities__title">{kitchen.title}</h3>
    <article className="amenities__article-container">
      <div className="amenities__article__title">Oven</div>
      <div className="amenities__article__image-container">
        <img src={kitchen.oven} alt="oven" />
      </div>
    </article>

    <article className="amenities__article-container">
      <div className="amenities__article__title">Refrigerator</div>
      <div className="amenities__article__image-container">
        <img src={kitchen.refrigerator} alt="refrigerator" />
      </div>
    </article>

    <article className="amenities__article-container">
      <div className="amenities__article__title">Cooking basics</div>
      <div className="amenities__article__image-container">
        <img src={kitchen.cooking_basics} alt="cooking_basics" />
      </div>
    </article>

    <article className="amenities__article-container">
      <div className="amenities__article__title">Dishes and silverware</div>
      <div className="amenities__article__image-container">
        <img src={kitchen.dishes_and_silverware} alt="dishes_and_silverware" />
      </div>
    </article>

    <article className="amenities__article-container">
      <div className="amenities__article__title">Stove</div>
      <div className="amenities__article__image-container">
        <img src={kitchen.stove} alt="stove" />
      </div>
    </article>

    <article className="amenities__article-container">
      <div className="amenities__article__title">Rice maker</div>
      <div className="amenities__article__image-container">
        <img src={kitchen.rice_maker} alt="rice_maker" />
      </div>
    </article>

    <article className="amenities__article-container">
      <div className="amenities__article__title">Dining table</div>
      <div className="amenities__article__image-container">
        <img src={kitchen.dining_table} alt="dining_table" />
      </div>
    </article>

    <article className="amenities__article-container">
      <div className="amenities__article__title">Outdoor dining area</div>
      <div className="amenities__article__image-container">
        <img src={kitchen.oven} alt={kitchen.title} />
      </div>
    </article>
  </section>
);

export default Kitchen;

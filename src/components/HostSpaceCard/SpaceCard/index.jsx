import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardSpaceOffert = ({ space }) => {
  console.log('🚀 ~ file: space', space);
  return (
    <>
      <Link className="space-link" to={`/SpaceDetail/${space._id}`} key={space._id}>
        <div className="card__image-container">
          <div>
            <img className="card__image__image" src={space.img[0]} alt={space.title} />
          </div>
        </div>
      </Link>
      <div className="info-container">
        <div className="card__title"><b>{space.title}</b></div>
        <p className="card__description">{space.description}</p>
        <div className="card__price"> ${space.price} <span>night</span></div>
      </div>
    </>
  );
};

CardSpaceOffert.propTypes = {
  space: PropTypes.shape().isRequired,
};

export default CardSpaceOffert;

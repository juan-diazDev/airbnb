/* eslint-disable no-underscore-dangle */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const CardSpace = ({ space }) => {
  console.log('🚀', space);
  return (
    <main className="mainSection mainSection--queri-bgscreen">
      <Link className="space-link" to={`/SpaceDetail/${space._id}`} key={space._id}>
        <div className="card__image-container">
          <div>
            <img className="card__image__image" src={space.img} alt={space.title} />
          </div>
        </div>
      </Link>
      <div className="info-container">
        <div className="card__title"><b>{space.title}</b></div>
        <p className="card__description">{space.description}</p>
        <div className="card__price"> ${space.price} <span>night</span></div>
      </div>
    </main>
  );
};

CardSpace.propTypes = {
  space: PropTypes.shape().isRequired,
};

export default CardSpace;

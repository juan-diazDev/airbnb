/* eslint-disable no-underscore-dangle */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const CardSpace = ({ space }) => (
  <main className="mainSection mainSection--queri-bgscreen">
    {
      space
        ? (
          <>
            <Link className="space-link" to={`/space-detail/${space._id}`} key={space._id}>
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
        )
        : <div className="loader" />
    }
  </main>

);

CardSpace.propTypes = {
  space: PropTypes.shape().isRequired,
};

export default CardSpace;

import PropTypes from 'prop-types';

const CardSpaceOffert = ({ space }) => (
  <div className="host__mainSection">
    <div className="card__image-container">
      <div>
        <img className="card__image__image" src={space.img[0]} alt={space.title} />
      </div>
    </div>
    <div className="info-container">
      <div className="card__title"><b>{space.title}</b></div>
      <p className="card__description">{space.description}</p>
      <div className="card__price"> ${space.price} <span>night</span></div>
    </div>
  </div>
);

CardSpaceOffert.propTypes = {
  space: PropTypes.shape().isRequired,
};

export default CardSpaceOffert;

import PropTypes from 'prop-types';
import { deleteSpace } from '../../../services/spaces';

const CardSpaceOffert = ({ space }) => {
  const handleDelete = async () => {
    try {
      await deleteSpace(space._id);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="host__mainSection">
      <div className="card__image-container">
        <div>
          <img className="card__image__image" src={space.img[0]} alt={space.title} />
          <button className="card__delete__button" type="button" onClick={handleDelete}>
            X
          </button>
        </div>
      </div>
      <div className="info-container">
        <div className="card__title"><b>{space.title}</b></div>
        <p className="card__description">{space.description}</p>
        <div className="card__price"> ${space.price} <span>night</span></div>
      </div>
    </div>
  );
};

CardSpaceOffert.propTypes = {
  space: PropTypes.shape().isRequired,
};

export default CardSpaceOffert;

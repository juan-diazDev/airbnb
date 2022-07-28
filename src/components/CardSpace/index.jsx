import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const CardSpace = ({ space }) => (
  <div className="main-container">
    <Link className="space-link" to="/SpaceDetail" key={space.id}>
      <main className="mainSection mainSection--queri-bgscreen">
        <div className="mainSection__card  mainSection__card--queri-bgscreen">
          <div className="card__image-container">
            <img className="card__image__image" src={space.img} alt="space" />
          </div>
          <div className="card__location"><b>{space.location}</b></div>
          <div className="card__distance">{space.distance}</div>
          <div className="card__dates">{space.dates}</div>
          <div className="card__price"><b>{space.price}</b> / night</div>
        </div>
      </main>
    </Link>
  </div>
);

CardSpace.propTypes = {
  space: PropTypes.shape().isRequired,
};

export default CardSpace;

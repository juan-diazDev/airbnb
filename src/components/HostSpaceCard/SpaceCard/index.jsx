import PropTypes from 'prop-types';
import './styles.scss';

const CardSpaceOffert = ({ space }) => {
  console.log('🚀 ~ file: index.jsx ~ line 9 ~ CardSpaceOffert ~ space', space);
  return (
    <div>
      hola
    </div>
  );
};

CardSpaceOffert.propTypes = {
  space: PropTypes.shape().isRequired,
};

export default CardSpaceOffert;

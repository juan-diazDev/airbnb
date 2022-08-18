import PropTypes from 'prop-types';

const Titles = ({ title, city, state }) => (
  <>
    <div className="detial__title-container">
      <h1 className="detail__title">{title}</h1>
      <p className="detail__location">{city}, {state}</p>
    </div>
    <hr className="spaceDetail__line-separation" />
  </>
);

Titles.defaultProps = {
  title: null,
  city: null,
  state: null,
};

Titles.propTypes = {
  title: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
};

export default Titles;

import PropTypes from 'prop-types';

const Description = ({ details }) => (
  <section className="descriptions__main-container">
    <div>
      <p>Place Hosted by {details.owner}</p>
      <p>{details.howMany} Guests · {details.amenities.bedroomAndLaudry[0]} bedrooms ·
        {details.amenities.beds} beds · {details.amenities.bathroom[0]} bathroom
      </p>
    </div>

    <hr />

  </section>
);

Description.defaultProps = {
  details: null,
};

Description.propTypes = {
  details: PropTypes.shape(),
};

export default Description;

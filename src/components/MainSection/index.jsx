/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import CardSpace from '../CardSpace';
import './style.scss';

const MainSection = ({ list }) => (
  <div className="cards-conatiner">
    <h4>Explore near and from home</h4>
    {
      list.map((item) => (
        <CardSpace key={item._id} space={item} />
      ))
    }
  </div>
);

MainSection.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};

export default MainSection;

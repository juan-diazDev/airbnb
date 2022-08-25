/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import CardSpace from '../CardSpace';
import './style.scss';

const MainSection = ({ list }) => (
  <div className="cards-conatiner">
    <p>Plan a different kind of getaway to uncover the hiddens gems near to you!</p>
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

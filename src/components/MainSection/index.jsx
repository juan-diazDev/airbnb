import PropTypes from 'prop-types';
import CardSpace from '../CardSpace';
import './style.scss';

const MainSection = ({ list }) => (
  <div className="cards-conatiner">
    {
      list.map((item) => (
        <CardSpace key={item.id} space={item} />
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

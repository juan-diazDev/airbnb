import PropTypes from 'prop-types';
import CardSpace from '../CardSpace';

const MainSection = ({ list }) => (
  <>
    {
      list.map((item) => (
        <CardSpace key={item.id} space={item} />
      ))
    }
  </>
);

MainSection.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};

export default MainSection;

/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardSpace from '../CardSpace';
import './style.scss';
import { fetchSpaceList } from '../../store/action/space';

const MainSection = () => {
  const spaces = useSelector((state) => state.space.spaceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpaceList());
  }, []);

  return (
    <div className="cards-conatiner">
      <p>Plan a different kind of getaway to uncover the hiddens gems near to you!</p>
      {
        spaces.map((space) => (
          <CardSpace key={space._id} space={space} />
        ))
      }
    </div>
  );
};

export default MainSection;

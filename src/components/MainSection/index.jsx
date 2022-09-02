/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardSpace from '../CardSpace';
import './style.scss';
import { fetchSpaceList } from '../../store/action/space';

const MainSection = () => {
  const { spaceList, query } = useSelector((state) => state.space);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpaceList());
  }, []);

  return (
    <div className="cards-conatiner">
      <p>Plan a different kind of getaway to uncover the hiddens gems near to you!</p>
      {
        !query
          ? spaceList.map((space) => (
            <CardSpace key={space._id} space={space} />
          ))
          : spaceList.filter((space) => space.address.country.toLowerCase().includes(query))
            .map((space) => (
              <CardSpace key={space._id} space={space} />
            ))

      }
    </div>
  );
};

export default MainSection;

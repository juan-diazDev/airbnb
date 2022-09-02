import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CardSpaceOffert from '../../components/HostSpaceCard/SpaceCard';
import { fetchHostSpaceList } from '../../store/action/space';

const HostSpacesAdmin = () => {
  const hostSpaces = useSelector((state) => state.space.spaceHostList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHostSpaceList());
  }, []);
  return (
    <div>
      <div>
        <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659662837/images/LogoIcon/Pink_a8frx9.png" alt="airbnb_logo" />
      </div>
      <Link to="/">
        <button type="button">
          Back to home
        </button>
      </Link>
      <div>
        <h1>Hello</h1>
        <div>
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659736178/images/Account/Pink-user_atwtje.png" alt="user logo" />
        </div>
      </div>
      <div>
        {
        hostSpaces.map((space) => (
          <CardSpaceOffert key={space.id} space={space} />
        ))
      }
      </div>
    </div>
  );
};

export default HostSpacesAdmin;
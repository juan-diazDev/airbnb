/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadSpaceDetail } from '../../../store/action/space';
import { getSpace } from '../../../services/spaces';

const HostEditSpace = () => {
  const dispatch = useDispatch();
  const id = localStorage.getItem('_id');
  const space = useSelector((state) => state.space.spaceDetail);
  console.log('This is the id of the place', id);
  useEffect(() => {
    const fetchDatatoChange = async () => {
      const result = await getSpace(id);
      dispatch(loadSpaceDetail(result));
    };
    fetchDatatoChange();
  }, []);

  console.log('This is the space that you are bringing', space);

  return (
    <>
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
    </>
  );
};
export default HostEditSpace;

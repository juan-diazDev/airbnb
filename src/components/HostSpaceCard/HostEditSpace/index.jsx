/* eslint-disable max-len */
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
    <div>
      <div>
        <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659662837/images/LogoIcon/Pink_a8frx9.png" alt="airbnb_logo" />
      </div>
      <Link to="/HostSpacesAdmin">
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
        <p>Images:</p>
        <p>{ space.img?.map((img) => (<img src={img} alt="placeimg" />)) }</p>
      </div>
      <div>
        <p>Title: {space?.title}</p>
      </div>
      <div>
        <p>Description: {space?.description}</p>
      </div>
      <div>
        <p>Privacy type: {space?.privacyType}</p>
      </div>
      <div>
        <p>Guests: {space?.howMany}</p>
      </div>
      <div>
        <p>Beds: {space.amenities?.beds}</p>
      </div>
      <div>
        <p>Bedrooms: {space.amenities?.bedrooms}</p>
      </div>
      <div>
        <p>Bathrooms: {space.amenities?.bathrooms}</p>
      </div>
      <div>
        <p>Price: $ {space?.price}</p>
      </div>
      <div>
        <p>Amenities:</p>
        <p>Kitchen:</p>
        <p>{ space.amenities.kitchen?.map((kitchen) => (<span>{kitchen}</span>)) }</p>
        <p>Bathroom:</p>
        <p>{ space.amenities.bathroom?.map((bathroom) => (<span>{bathroom}</span>)) }</p>
        <p>Bedroom and loundry:</p>
        <p>{ space.amenities.bedroomAndLaundry?.map((bedroomAndLaundry) => (<span>{bedroomAndLaundry}</span>)) }</p>
        <p>Facilities:</p>
        <p>{ space.amenities.facilities?.map((facilities) => (<span>{facilities}</span>)) }</p>
        <p>Entertainment:</p>
        <p>{ space.amenities.entertainment?.map((entertainment) => (<span>{entertainment}</span>)) }</p>
      </div>
    </div>
  );
};
export default HostEditSpace;

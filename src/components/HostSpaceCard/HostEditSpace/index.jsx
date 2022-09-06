/* eslint-disable */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadSpaceDetail } from '../../../store/action/space';
import { fetchUserDetail } from '../../../store/action/user';
import { getSpace } from '../../../services/spaces';
import { sectionAmenities } from '../../HostPlaceRegister/Amenities/sectionAmenities';
import './styles.scss';

const HostEditSpace = () => {
  const hostDatahead = useSelector((state) => state.user.userDetail);
  const space = useSelector((state) => state.space.spaceDetail);
/*
  const [spaceUpdated, setSpaceUpdated] = useState({
    title: '', description: '', img: '', amenities: {}, price: 0, howMany: '', privacyType: ''
  }); */

  const [editSpace, setEditSpace] = useState(false);
  const [editHostSpace, setEditHostSpace] = useState({});
/*   const [imgToSend, setImgToSend] = useState([space.img]); */

  const handleClick = () => {
    setEditSpace(true);
  };
  const handleClick2 = () => {
    setEditSpace(false);
  };

  const handleChange = (e) => {
    setEditHostSpace({ ...editHostSpace, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const id = localStorage.getItem('_id');

  console.log('This is the id of the place', id);

  useEffect(() => {
    dispatch(fetchUserDetail());
    const fetchDatatoChange = async () => {
      const result = await getSpace(id);
      dispatch(loadSpaceDetail(result));
    };
    fetchDatatoChange();
  }, []);

  console.log("Espacios", space);

  const handleDeletePhotos = (index) => {
    console.log("el item a eliminar", index)
    setImgToSend(space.img.splice(index, 1));
    console.log("imagen", imgToSend);
  }

  console.log('This is the space that you are bringing', space);

  return (
    <div>
      <div className="admin_header">
        <div className="admin_logo_container">
          <Link to="/HostSpacesAdmin">
            <img className="admin_logo" src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659723860/images/BackArrow/Pink_xsrmtu.png" alt="airbnb_logo" />
          </Link>
        </div>
        <div className="profile_container">
          <h1 className="greeting">Hello {hostDatahead?.name}</h1>
          <div className="admin_pic_container">
            <img className="admin_pic_container" src={hostDatahead?.avatar} alt="user logo" />
          </div>
        </div>
      </div>
      <form action="">
        <button type="button" onClick={handleClick}>Edit space </button>
         {/* <div>
          <p>Images:</p>
          <p>{ space.img?.map((img, index) => (<><img src={img} id={index} alt="placeimg" /><button type="button" onClick={handleDeletePhotos} value={index}>Delete image</button></>)) }</p>
        </div>

        <div>
          { editSpace ? (<><p>Title:</p><input name="title" type="text" onChange={handleChange} /></>) : <p>Title: {space?.title}</p> }
        </div>

        <div>
          { editSpace ? (<><p>Description:</p><input name="description" type="text" onChange={handleChange} /></>) : <p>Description: {space?.description}</p> }
        </div>
        <div>
          { editSpace ? (
            <>
              <p>Privacy type:</p>
              <select name="select" onChange={handleChange}>
                <option value="" selected disabled hidden>Choose one option</option>
                <option value="ENTIRE_PLACE">An entire place</option>
                <option value="PRIVATE_ROOM">A private room</option>
                <option value="SHARED_ROOM">A shared room</option>
              </select>
            </>
          ) : <p>Privacy type: {space?.privacyType}</p> }
        </div>
        <div>
          { editSpace ? (<><p>Guest:</p><input name="guest" type="number" onChange={handleChange} /></>) : <p>Guests: {space?.howMany}</p> }
        </div>
        <div>
          { editSpace ? (<><p>Beds:</p><input name="beds" type="number" onChange={handleChange} /></>) : <p>Beds: {space.amenities?.beds}</p> }
        </div>
        <div>
          { editSpace ? (<><p>Bedroom:</p><input name="bedroom" type="number" onChange={handleChange} /></>) : <p>Bedrooms: {space.amenities?.bedrooms}</p> }
        </div>
        <div>
          { editSpace ? (<><p>Bathrooms:</p><input name="bathrooms" type="number" onChange={handleChange} /></>) : <p>Bathrooms: {space.amenities?.bathrooms}</p> }
        </div>
        <div>
          { editSpace ? (<><p>Price:</p><input name="price" type="number" onChange={handleChange} /></>) : <p>Price: $ {space?.price}</p> }
        </div>

        { editSpace ? (
          sectionAmenities?.map((section) => (
            <>
              <div className="addition__question">
                <h2 className="question__addtitle" onChange={handleChange}>{section.section}</h2>
              </div>
              <div className="add_included-options">
                {section.buttons?.map((button) => (
                  <div>
                    <input type="checkbox" id={button?.amenitie} onChange={handleChange} value={button?.amenitie} />
                    <label htmlFor={button?.amenitie}>{button?.amenitie}</label>
                  </div>
                ))}
              </div>
            </>
          )))
          : <><p>Amenities:</p><p>Kitchen:</p><p>{space.amenities.kitchen?.map((kitchen) => (<span>{kitchen}</span>))}</p><p>Bathroom:</p><p>{space.amenities.bathroom?.map((bathroom) => (<span>{bathroom}</span>))}</p><p>Bedroom and loundry:</p><p>{space.amenities.bedroomAndLaundry?.map((bedroomAndLaundry) => (<span>{bedroomAndLaundry}</span>))}</p><p>Facilities:</p><p>{space.amenities.facilities?.map((facilities) => (<span>{facilities}</span>))}</p><p>Entertainment:</p><p>{space.amenities.entertainment?.map((entertainment) => (<span>{entertainment}</span>))}</p></>}

        {editSpace ? (
          <div className="profile__CancelorSave">
            <button type="button" className="profile__cancelEditInfo1" onClick={handleClick2}>Cancel</button>
            <button type="submit" className="profile__cancelEditInfo2">Save</button>
          </div>
        )
          : null} */}
      </form>
    </div>
  );
};
export default HostEditSpace;

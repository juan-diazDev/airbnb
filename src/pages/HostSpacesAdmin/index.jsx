import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CardSpaceOffert from '../../components/HostSpaceCard/SpaceCard';
import { fetchHostSpaceList } from '../../store/action/space';
import './styles.scss';
import { fetchUserDetail } from '../../store/action/user';

const HostSpacesAdmin = () => {
  const hostSpaces = useSelector((state) => state.space.spacesHostList);
  const hostDatahead = useSelector((state) => state.user.userDetail);
  const dispatch = useDispatch();
  console.log('estos son los espacios a renderizar en map:', hostSpaces);
  useEffect(() => {
    dispatch(fetchUserDetail());
    dispatch(fetchHostSpaceList());
  }, []);
  console.log('datos de usuario', hostDatahead);
  return (
    <div>
      <div className="admin_header">
        <div className="admin_logo_container">
          <Link to="/">
            <img className="admin_logo" src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659723860/images/BackArrow/Pink_xsrmtu.png" alt="airbnb_logo" />
          </Link>
        </div>
        <div className="profile_container">
          <h1 className="greeting">Hello {hostDatahead.name}</h1>
          <div className="admin_pic_container">
            <img className="admin_pic_container" src={hostDatahead.avatar} alt="user logo" />
          </div>
        </div>
      </div>
      <div className="cardsAdmin_container">
        <div className="cardAdmin_container">
          {
          hostSpaces?.map((space) => (
            <CardSpaceOffert key={space?.id} space={space} />
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default HostSpacesAdmin;

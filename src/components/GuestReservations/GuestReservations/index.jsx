/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersBooking } from '../../../services/reservations';
import { fetchUserDetail } from '../../../store/action/user';
import { fetchSpaceList } from '../../../store/action/space';
import Header from '../../Header';
import ReservationCard from '../ReservationCard';

const GuestReservations = () => {
  const dispatch = useDispatch();
  const [bookingClone, setBookingClone] = useState([]);
  const filteredSpaces = [];

  const { _id } = useSelector((state) => state?.user?.userDetail);
  const spaces = useSelector((state) => state?.space?.spaceList);

  useEffect(() => {
    dispatch(fetchUserDetail());
    const fetchData = async () => {
      try {
        const booking = await getUsersBooking(_id);
        dispatch(fetchSpaceList(booking));
        setBookingClone([...booking]);
      } catch (error) {
        console.log(error);
      }
    };
    if (_id) {
      fetchData();
    }
  }, [_id]);

  spaces.forEach((item) => {
    bookingClone.forEach((item2) => {
      if (item._id === item2.spaceId) {
        filteredSpaces.push(item);
      }
    });
  });
  console.log(bookingClone);
  const newSpaces = filteredSpaces.map((newSpace) => (
    {
      image: newSpace.img,
      title: newSpace.title,
      id: newSpace._id,
    }
  ));
  // console.log(newSpaces);

  return (
    <>
      <Header />
      {
        newSpaces.map((space) => (
          <ReservationCard
            space={space}
            arrive={bookingClone.arrive}
            departure={bookingClone.departure}
            pets={bookingClone.pets}
            price={bookingClone.price}
            adults={bookingClone.adults}
          />
        ))
      };
    </>
  );
};

export default GuestReservations;

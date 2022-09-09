/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersBooking } from '../../../services/reservations';
import { fetchUserDetail } from '../../../store/action/user';
import Header from '../../Header';
import ReservationCard from '../ReservationCard';

const GuestReservations = () => {
  const dispatch = useDispatch();
  const [bookingClone, setBookingClone] = useState([]);

  const { _id } = useSelector((state) => state?.user?.userDetail);

  useEffect(() => {
    dispatch(fetchUserDetail());
    const fetchData = async () => {
      try {
        const booking = await getUsersBooking(_id);
        setBookingClone([...booking]);
      } catch (error) {
        console.log(error);
      }
    };
    if (_id) {
      fetchData();
    }
  }, [_id]);

  return (
    <>
      <Header />

      <h2 className="booking__h2">Trips</h2>
      <h3 className="booking__h2">Reservations</h3>
      <main className="booking__homePage">
        {
          bookingClone.map((booking) => (
            <ReservationCard booking={booking} key={booking._id} />
          ))
        };
      </main>
    </>
  );
};

export default GuestReservations;

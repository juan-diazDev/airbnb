/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { getUser } from '../services/users';
import AccountPage from '../components/AccountPage/AccountPage';

const Account = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUser();
      setUser(result);
    };
    fetchData();
  }, []);
  return (
    <AccountPage user={user} />
  );
};

export default Account;

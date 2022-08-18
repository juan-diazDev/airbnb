import { useEffect, useState } from 'react';
import { getUsers } from '../services/users';
// import {useParams} from 'react-router-dom';
import AccountPage from '../components/AccountPage/AccountPage';

const Account = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers();
      setUser(result);
    };
    fetchData();
  }, []);

  return (
    <AccountPage user={user} />
  );
};

export default Account;

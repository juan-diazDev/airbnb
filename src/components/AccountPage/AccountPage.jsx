/* eslint-disable no-underscore-dangle */
import './AccountPage.scss';
import AccountMain from './AccountMain';
import AccountNavbar from './AccountNavbar';
import Header from '../Header';
import HostHeader from '../HostSpaceCard/HostHeader';

const AccountPage = () => {
  const result = localStorage.getItem('profile');
  const profile = JSON.parse(result);

  const role = profile?.role;

  return (
    <>
      {
        role === 'HOST'
          ? <HostHeader />
          : <Header />
      }
      <AccountMain />
      <AccountNavbar />
    </>
  );
};

export default AccountPage;

import './AccountPage.scss';
import PropTypes from 'prop-types';
import AccountMain from './AccountMain';
import AccountNavbar from './AccountNavbar';
import Header from '../Header';

const AccountPage = ({ user }) => (
  <>
    <Header />
    {
      user.map((user1) => (
        <AccountMain key={user1.id} user1={user1} />
      ))
    }
    <AccountNavbar />
  </>
);

AccountPage.propTypes = {
  user: PropTypes.shape(),
};
AccountPage.defaultProps = {
  user: {},
};

export default AccountPage;

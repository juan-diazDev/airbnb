/* eslint-disable no-underscore-dangle */
import './AccountPage.scss';
import PropTypes from 'prop-types';
import AccountMain from './AccountMain';
import AccountNavbar from './AccountNavbar';
import Header from '../Header';

const AccountPage = ({ user }) => (
  <>
    <Header />
    <AccountMain user={user} />
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

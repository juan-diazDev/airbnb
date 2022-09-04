import './styles.scss';
import PropTypes from 'prop-types';

const ChangePassword = ({ closeModal }) => {
  const handleClick = () => {
    closeModal(false);
  };

  return (
    <div className="changePassword__Background">
      <div className="changePassword__modalContainer">
        <div className="changePassword__currentCancel">
          <h3>Password</h3>
          <button type="button" onClick={handleClick}> Cancel </button>
        </div>
        <span className="changePassword__span"> Current password </span>
        <input
          className="changePassword__input"
          type="password"
          name="password"
        />
        <span className="changePassword__span"> New password </span>
        <input
          className="changePassword__input"
          type="password"
          name="password"
        />
        <span className="changePassword__span"> Confirm password </span>
        <input
          className="changePassword__input"
          type="password"
          name="password"
        />
        <button className="changePassword_button" type="button"> Update password</button>
      </div>
    </div>
  );
};

ChangePassword.defaultProps = {
  closeModal: null,
};

ChangePassword.propTypes = {
  closeModal: PropTypes.bool,
};

export default ChangePassword;

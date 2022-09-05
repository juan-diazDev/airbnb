/* eslint-disable no-underscore-dangle */
import './styles.scss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchUserDetail } from '../../../store/action/user';
import { changePassword } from '../../../services/auth';

const ChangePassword = ({ closeModal }) => {
  const user = useSelector((state) => state.user.userDetail);
  const dispatch = useDispatch();
  const [editPassword, seteditPassword] = useState({});

  useEffect(() => {
    dispatch(fetchUserDetail());
  }, []);

  const id = user._id;

  const handleClick = () => {
    closeModal(false);
  };

  const handleChange = (e) => {
    seteditPassword({ ...editPassword, [e.target.name]: e.target.value });
  };

  console.log(editPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changePassword({ id, ...editPassword });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="changePassword__Background">
      <form action="" onSubmit={handleSubmit} className="changePassword__modalContainer">
        <div className="changePassword__currentCancel">
          <h3>Password</h3>
          <button type="button" onClick={handleClick} className="changePassword__cancelButton"> Cancel </button>
        </div>
        <span className="changePassword__span"> Current password </span>
        <input
          className="changePassword__input"
          type="password"
          name="oldpassword"
          onChange={handleChange}
        />
        <span className="changePassword__span"> New password </span>
        <input
          className="changePassword__input"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <span className="changePassword__span"> Confirm password </span>
        <input
          className="changePassword__input"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <button className="changePassword_updateButton" type="submit"> Update password</button>
      </form>
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

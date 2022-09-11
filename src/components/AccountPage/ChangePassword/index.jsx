import './styles.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { fetchUserDetail } from '../../../store/action/user';
import { changePassword } from '../../../services/auth';

const ChangePassword = () => {
  const user = useSelector((state) => state.user.userDetail);
  const dispatch = useDispatch();
  const [editPassword, seteditPassword] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserDetail());
  }, []);

  const id = user._id;

  const handleChange = (e) => {
    seteditPassword({ ...editPassword, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { oldPassword, password, confirmPassword } = editPassword;
    if (!oldPassword || !password || !confirmPassword) {
      swal({
        title: 'Error!',
        text: 'All the fields must have information',
        icon: 'error',
      });
    } else if (password === confirmPassword) {
      if (password.length >= 8) {
        try {
          const response = await changePassword({ id, ...editPassword });
          if (response.status) {
            swal({
              title: 'Successfuly changed!',
              text: 'Your Password has been successfully changed',
              icon: 'success',
            });
            localStorage.clear();
            navigate('/login-form');
          } else {
            swal({
              title: 'Error!',
              text: 'Current password not found',
              icon: 'error',
            });
          }
          if (response.message === 'New password not allowed') {
            swal({
              title: 'Error!',
              text: 'New password not allowed',
              icon: 'error',
            });
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        swal({
          title: 'Error!',
          text: 'Passwords must contain at least 8 digits',
          icon: 'error',
        });
      }
    } else {
      swal({
        title: 'Error!',
        text: 'Passwords must match',
        icon: 'error',
      });
    }
  };

  return (
    <div className="changePassword__Background">
      <form action="" onSubmit={handleSubmit} className="changePassword__modalContainer">
        <div className="changePassword__currentCancel">
          <h3>Password</h3>
          <Link to="/account">
            <button type="button" className="changePassword__cancelButton"> Cancel </button>
          </Link>
        </div>
        <span className="changePassword__span"> Current password </span>
        <input
          className="changePassword__input"
          type="password"
          name="oldPassword"
          onChange={handleChange}
        />
        <span className="changePassword__span"> New password </span>
        <input
          className="changePassword__input"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <p className="changePassword__helptext">Your password must contain at least 8 digits.</p>
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

export default ChangePassword;

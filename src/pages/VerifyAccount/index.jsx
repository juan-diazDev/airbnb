import './styles.scss';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { verify } from '../../services/auth';

const AccountVerfication = () => {
  const { token } = useParams();
  // console.log(token);
  console.log(useParams());
  const navigate = useNavigate();

  if (token) {
    useEffect(() => {
      const verifyAccount = async () => {
        const { token: jwtoken, profile } = await verify(token);
        console.log(token);
        localStorage.setItem('token', jwtoken);
        localStorage.setItem('profile', JSON.stringify(profile));

        setTimeout(() => {
          navigate('/');
        }, 800);
      };

      verifyAccount();
    }, []);
  }

  return (
    <div className="account-verification__main-container">
      <div className="account-verification__message-container">
        <div className="account-verification__image-container">
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659662767/images/AlterLogo/AlterLogo_-_pink2_v3pefc.png" alt="Logo" />
        </div>
        {
          token
            ? <h3>Your account is active!</h3>
            : <h3>Check your email!</h3>
        }
      </div>
    </div>
  );
};

export default AccountVerfication;

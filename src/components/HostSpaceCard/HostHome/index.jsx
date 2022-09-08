import { useSelector } from 'react-redux';
import CardSpaceOffert from '../SpaceCard';
import './styles.scss';

const HostHome = () => {
  const hostDatahead = useSelector((state) => state.user.userDetail);
  console.log('🚀 ~ file: index.jsx ~ line 7 ~ HostEditSpace ~ hostDatahead', hostDatahead);

  return (
    <div>
      <CardSpaceOffert />
    </div>
  );
};
export default HostHome;

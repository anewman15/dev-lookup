import SearchUser from '../presentational/SearchUser';
import UserInfo from './UserInfo';

const Home = () => (
  <div className="Home">
    <SearchUser />
    <UserInfo />
  </div>
);

export default Home;

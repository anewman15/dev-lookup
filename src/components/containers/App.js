import SearchUser from '../presentational/SearchUser';
import TopNav from '../presentational/TopNav';
import UserInfo from './UserInfo';

const App = () => (
  <div className="App">
    <TopNav />
    <SearchUser />
    <UserInfo />
  </div>
);

export default App;

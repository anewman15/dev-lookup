import SkillsFilter from '../presentational/SkillsFilter';
import UserRepos from './UserRepos';

const UserInfo = () => {
  const user = 'Username';
  return (
    <div>
      {`${user}`}
      <UserRepos />
      <SkillsFilter />
    </div>
  );
};

export default UserInfo;

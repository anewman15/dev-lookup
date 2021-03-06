import UserRepos from './UserRepos';

const UserInfo = () => {
  const user = 'Username';
  return (
    <div>
      {`${user}`}
      <UserRepos />
    </div>
  );
};

export default UserInfo;

import common from '../../styles/commonStyles.module.css';

const UserNotFound = () => (
  <div className={`${common.container} ${common.flexCenter}`}>
    <p className={`${common.boxRed}`}>User not found</p>
  </div>
);

export default UserNotFound;

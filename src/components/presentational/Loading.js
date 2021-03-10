import common from '../../styles/commonStyles.module.css';

const Loading = () => (
  <div className={`${common.container} ${common.flexCenter} ${common.m1}`}>
    <img src={`${process.env.PUBLIC_URL}/loading.gif`} alt="loading" />
  </div>
);

export default Loading;

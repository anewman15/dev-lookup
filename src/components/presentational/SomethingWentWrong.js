import common from '../../styles/commonStyles.module.css';

const SomethingWentWrong = () => (
  <div className={`${common.container} ${common.flexCenter}`}>
    <p className={`${common.boxRed}`}>Something&apos;s WRONG. Maybe Your Internet?</p>
  </div>
);

export default SomethingWentWrong;

import { Link } from 'react-router-dom';
import common from '../../styles/commonStyles.module.css';
import topNav from '../../styles/topNav.module.css';

const TopNav = () => (
  <nav className={`${topNav.navBar}`}>
    <div className={`${common.container}`}>
      <div className={common.flexBetween}>
        <div className={`${common.flexBetween} ${topNav.navLeft}`}>
          <Link className={`${topNav.navLink}`} to="/">
            <img className={topNav.logo} src={`${process.env.PUBLIC_URL}/logo.png`} alt="dev-lookup-logo" />
          </Link>
        </div>
        <div className={`${common.flexBetween} ${topNav.navRight}`}>
          <Link className={`${topNav.navLink}`} to="/">Home</Link>
          <Link className={`${topNav.navLink}`} to="/">Get anewman15&apos;s repos</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default TopNav;

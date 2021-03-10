import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import common from '../../styles/commonStyles.module.css';
import styleRepo from '../../styles/repo.module.css';

const Repo = ({ index, repo }) => (
  <div className={`${styleRepo.repo}`}>
    <div className={`${common.flexBetween}`}>
      <div className={`${common.flexBetween}`}>
        <p className={`${styleRepo.paragraph}`}>{index + 1}</p>
        <p className={`${styleRepo.paragraph}`}>{repo.language}</p>
      </div>
      <div className={`${common.flexStart}`}>
        <p className={`${styleRepo.paragraph}`}>
          {`Stars: ${repo.stargazers_count}`}
        </p>
        <p className={`${styleRepo.paragraph}`}>
          {`Last commited: ${repo.updated_at}`}
        </p>
      </div>
    </div>
    <div className={`${styleRepo.repoUrl}`}>
      <Link className={`${styleRepo.repoLink}`} to={`repo/${repo.full_name}`}>{`https://github.com/${repo.full_name}`}</Link>
    </div>
  </div>
);

Repo.propTypes = {
  index: PropTypes.number,
  repo: PropTypes.object,
}.isReuired;

export default Repo;

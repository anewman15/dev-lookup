/*
  eslint-disable camelcase
*/

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { flexBetween, flexStart } from '../../styles/commonStyles.module.css';
import {
  repo as repoItem, paragraph, repoUrl, repoLink,
} from '../../styles/repo.module.css';

const Repo = ({ index, repo }) => {
  const {
    language, stargazers_count, updated_at, full_name,
  } = repo;

  return (
    <div className={`${repoItem}`}>
      <div className={`${flexBetween}`}>
        <div className={`${flexBetween}`}>
          <p className={`${paragraph}`}>{index + 1}</p>
          <p className={`${paragraph}`}>{language}</p>
        </div>
        <div className={`${flexStart}`}>
          <p className={`${paragraph}`}>
            {`Stars: ${stargazers_count}`}
          </p>
          <p className={`${paragraph}`}>
            {`Last commited: ${updated_at}`}
          </p>
        </div>
      </div>
      <div className={`${repoUrl}`}>
        <Link className={`${repoLink}`} to={`repo/${full_name}`}>{`https://github.com/${full_name}`}</Link>
      </div>
    </div>
  );
};

Repo.propTypes = {
  index: PropTypes.number,
  repo: PropTypes.object,
}.isReuired;

export default Repo;

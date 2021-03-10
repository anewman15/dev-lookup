import PropTypes from 'prop-types';
import styleDetails from '../../styles/repoDetails.module.css';
import common from '../../styles/commonStyles.module.css';

const RepoDetails = ({ repoDetails }) => (
  <div className={`${common.container}`}>
    <div className={`${styleDetails.repoCard}`}>
      <div className={`${common.flexBetween}`}>
        <div className={`${common.flexBetween}`}>
          <p>{repoDetails.language ? `Language: ${repoDetails.language}` : 'Language: None yet'}</p>
          <p className={`${styleDetails.repoSpecs}`}>{`Stars: ${repoDetails.stargazers_count}`}</p>
        </div>
        <div className={`${common.flexBetween}`}>
          <p className={`${styleDetails.repoSpecs}`}>{`Watchers: ${repoDetails.watchers_count}`}</p>
          <p>{`Subscribers: ${repoDetails.subscribers_count}`}</p>
        </div>
      </div>
      <hr />
      <div>
        <div className={`${common.flexBetween}`}>
          <p>{`Repository Name: ${repoDetails.full_name}`}</p>
          <p>{`Owner: ${repoDetails.owner.login}`}</p>
        </div>
        <div>
          <a className={`${styleDetails.repoUrl}`} href={repoDetails.html_url}>{repoDetails.html_url}</a>
        </div>
      </div>
      <hr />
      <div>
        <p>Description:</p>
        <p>{repoDetails.description ? repoDetails.description : 'No description available'}</p>
      </div>
      <hr />
      <div className={`${common.flexBetween}`}>
        <p>{`Created: ${repoDetails.created_at}`}</p>
        <p>{`Last updated: ${repoDetails.updated_at}`}</p>
      </div>
      <hr />
    </div>
  </div>
);

RepoDetails.propTypes = {
  repoDetails: PropTypes.object,
}.isReuired;

export default RepoDetails;

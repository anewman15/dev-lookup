import PropTypes from 'prop-types';
import { container, flexBetween } from '../../styles/commonStyles.module.css';
import { repoCard, repoUrl, repoSpecs } from '../../styles/repoDetails.module.css';
import { formattedDate, timeFromNow } from '../../utils/date';

const RepoDetails = ({ repoDetails }) => (
  <div className={`${container}`}>
    <div className={`${repoCard}`}>
      <div className={`${flexBetween}`}>
        <div className={`${flexBetween}`}>
          <p>{repoDetails.language ? `Language: ${repoDetails.language}` : 'Language: None yet'}</p>
          <p className={`${repoSpecs}`}>{`Stars: ${repoDetails.stargazers_count}`}</p>
        </div>
        <div className={`${flexBetween}`}>
          <p className={`${repoSpecs}`}>{`Watchers: ${repoDetails.watchers_count}`}</p>
          <p>{`Subscribers: ${repoDetails.subscribers_count}`}</p>
        </div>
      </div>
      <hr />
      <div>
        <div className={`${flexBetween}`}>
          <p>{`Repository Name: ${repoDetails.full_name}`}</p>
          <p>{`Owner: ${repoDetails.owner.login}`}</p>
        </div>
        <div>
          <a className={`${repoUrl}`} href={repoDetails.html_url} target="_blank" rel="noreferrer">{repoDetails.html_url}</a>
        </div>
      </div>
      <hr />
      <div>
        <p>{repoDetails.description ? repoDetails.description : 'No description available'}</p>
      </div>
      <hr />
      <div className={`${flexBetween}`}>
        <p>{`Created: ${formattedDate(repoDetails.created_at)}`}</p>
        <p>{`Last committed: ${timeFromNow(repoDetails.updated_at)} ago`}</p>
      </div>
      <hr />
    </div>
  </div>
);

RepoDetails.propTypes = {
  repoDetails: PropTypes.object,
}.isReuired;

export default RepoDetails;

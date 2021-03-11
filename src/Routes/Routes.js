import { Switch, Route } from 'react-router-dom';
import Home from '../components/containers/Home';
import RepoInfo from '../components/containers/RepoInfo';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/repo/:repo_owner/:repo_name" component={RepoInfo} />
  </Switch>
);

export default Routes;

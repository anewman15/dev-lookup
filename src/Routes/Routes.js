import { Switch, Route } from 'react-router-dom';
import Home from '../components/containers/Home';
import RepoDetails from '../components/containers/RepoDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/repo/:repo_owner/:repo_name" component={RepoDetails} />
  </Switch>
);

export default Routes;

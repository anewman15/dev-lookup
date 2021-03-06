import { Switch, Route } from 'react-router-dom';
import Home from '../components/containers/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;

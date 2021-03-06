import { BrowserRouter } from 'react-router-dom';
import Routes from '../../Routes/Routes';
import TopNav from '../presentational/TopNav';

const App = () => (
  <BrowserRouter>
    <TopNav />
    <Routes />
  </BrowserRouter>
);

export default App;

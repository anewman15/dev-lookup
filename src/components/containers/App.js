import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import Routes from '../../Routes/Routes';
import TopNav from '../presentational/TopNav';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <TopNav />
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;

import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../../components/containers/App';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App', () => {
  it('renders the App to the dom', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

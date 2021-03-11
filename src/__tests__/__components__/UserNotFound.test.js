import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import UserNotFound from '../../components/presentational/UserNotFound';

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

describe('UserNotFound', () => {
  it('renders the user not found message', () => {
    const tree = renderer
      .create(<UserNotFound />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

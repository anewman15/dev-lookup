import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import Loading from '../../components/presentational/Loading';

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

describe('Loading', () => {
  it('renders a loading gif spinner', () => {
    const tree = renderer
      .create(<Loading />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

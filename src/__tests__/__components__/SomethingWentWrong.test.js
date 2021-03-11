import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import SomethingWentWrong from '../../components/presentational/SomethingWentWrong';

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

describe('SomethingWentWrong', () => {
  it('renders the something is wrong message', () => {
    const tree = renderer
      .create(<SomethingWentWrong />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

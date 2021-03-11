import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import NoRepos from '../../components/presentational/NoRepos';

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

describe('NoRepos', () => {
  it('renders the NoRepos component', () => {
    const tree = renderer
      .create(<NoRepos />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

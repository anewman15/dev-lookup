import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import repos from '../../sandbox/repos';
import RepoDetails from '../../components/containers/RepoDetails';

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

describe('RepoDetails', () => {
  it('renders the repository div', () => {
    const tree = renderer
      .create(<RepoDetails repoDetails={JSON.parse(repos)[0]} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

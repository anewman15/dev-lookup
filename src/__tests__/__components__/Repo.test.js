import { unmountComponentAtNode } from 'react-dom';
import { shallow } from 'enzyme';
import repos from '../../sandbox/repos';
import Repo from '../../components/containers/Repo';

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

describe('Repo', () => {
  it('renders the repository div', () => {
    const tree = shallow(<Repo index="1" repo={JSON.parse(repos)[0]} />);

    expect(tree.exists()).toBe(true);
  });
});

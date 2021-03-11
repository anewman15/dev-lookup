import { unmountComponentAtNode } from 'react-dom';
import { shallow } from 'enzyme';
import SearchUser from '../../components/presentational/SearchUser';

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

describe('SearchUser', () => {
  it('renders successfully', () => {
    const tree = shallow(<SearchUser />);

    expect(tree.exists()).toBe(true);
  });
});

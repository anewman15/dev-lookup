import { unmountComponentAtNode } from 'react-dom';
import { shallow } from 'enzyme';
import TopNav from '../../components/presentational/TopNav';

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

describe('TopNav', () => {
  it('renders navigation bar at the top of the page', () => {
    const tree = shallow(<TopNav />);

    expect(tree.exists()).toBe(true);
  });
});

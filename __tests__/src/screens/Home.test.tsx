import { render } from '@testing-library/react-native';

import { Home } from '../../../src/screens';

describe('<Home />', () => {
    it('should render correctly', () => {
        const screen = render(<Home />);
        expect(screen).toMatchSnapshot();
    });
});
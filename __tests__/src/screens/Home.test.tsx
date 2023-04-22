import { render } from '@testing-library/react-native';

import { Home } from '../../../src/screens';
import { ReduxWrapper } from '../../../src/utils/tests';

describe('<Home />', () => {
    it('should render correctly', () => {
        const screen = render(<Home />, { wrapper: ReduxWrapper });
        expect(screen).toMatchSnapshot();
    });
});
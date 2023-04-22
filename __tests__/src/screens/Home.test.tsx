import { render } from '@testing-library/react-native';

import { Home } from '../../../src/screens';
import { SafeAreaWrapper } from '../../../src/utils/tests';

describe('<Home />', () => {
    it('should render correctly', () => {
        const screen = render(<Home />, { wrapper: SafeAreaWrapper });
        expect(screen).toMatchSnapshot();
    });
});
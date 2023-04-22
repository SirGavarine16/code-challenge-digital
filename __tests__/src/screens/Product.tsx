import { render } from '@testing-library/react-native';

import { Product } from '../../../src/screens';

describe('<Product />', () => {
    it('should render correctly', () => {
        const screen = render(<Product />);
        expect(screen).toMatchSnapshot();
    });
});
import { render } from '@testing-library/react-native';

import { Movement } from '../../../src/screens';

describe('<Movement />', () => {
    it('should render correctly', () => {
        const screen = render(<Movement />);
        expect(screen).toMatchSnapshot();
    });
});
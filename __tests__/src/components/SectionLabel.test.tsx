import { render } from '@testing-library/react-native';
import { SectionLabel } from '../../../src/components';

describe('<SectionLabel />', () => {
    it('should render correctly', () => {
        const screen = render(<SectionLabel />);
        expect(screen).toMatchSnapshot();
    });

    it('should display the given label', () => {
        const label = 'Testing';
        const { getByText } = render(<SectionLabel label={label} />);
        expect(getByText(label).children[0]).toBe(label);
    });
});
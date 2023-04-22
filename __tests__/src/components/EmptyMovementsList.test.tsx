import { render } from '@testing-library/react-native';
import { EmptyMovementsList } from '../../../src/components';

describe('<EmptyMovementsList />', () => {
    const renderComponent = () => render(<EmptyMovementsList />);

    it('should render correctly', () => {
        expect(renderComponent()).toMatchSnapshot();
    });

    it('should render a message', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('empty-message')).toBeDefined();
    });
});
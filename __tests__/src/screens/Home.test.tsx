import { render } from '@testing-library/react-native';

import { Home } from '../../../src/screens';
import { ReduxWrapper } from '../../../src/utils/tests';

describe('<Home />', () => {
    const renderComponent = () => render(<Home />, { wrapper: ReduxWrapper });

    it('should render correctly', () => {
        expect(renderComponent()).toMatchSnapshot();
    });

    it('should render welcome header', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('welcome-message')).toBeDefined();
        expect(getByTestId('user-name')).toBeDefined();
    });

    it('should render the points display', () => {
        const { getByTestId, getByText } = renderComponent();
        expect(getByText('Tus puntos')).toBeDefined();
        expect(getByTestId('points-card')).toBeDefined(); 
    });

    it('should render the movements list', () => {
        const { getByTestId, getByText } = renderComponent();
        expect(getByText('Tus movimientos')).toBeDefined();
        expect(getByTestId('list-container')).toBeDefined();; 
    });
});
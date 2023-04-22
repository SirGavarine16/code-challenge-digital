import { render } from '@testing-library/react-native';

import { MovementsList } from '../../../src/components';
import { ReduxWrapper } from '../../../src/utils/tests';

describe('<MovementsList />', () => {
    const renderComponent = () => render(<MovementsList />, { wrapper: ReduxWrapper });

    it('should render correctly', () => {
        const screen = renderComponent();
        expect(screen).toMatchSnapshot();
    });

    it('should display a section label', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('section-label')).toBeDefined();
    });

    it('should display a list container', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('list-container')).toBeDefined();
    });

    it('secton label should be Tus movimientos', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('section-label').children[0]).toBe('Tus movimientos');
    });
});

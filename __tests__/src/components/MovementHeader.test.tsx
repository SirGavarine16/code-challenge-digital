import { render } from '@testing-library/react-native';

import { MovementHeader } from '../../../src/components';
import { SafeAreaWrapper, dummyData } from '../../../src/utils/tests';

describe('<MovementHeader />', () => {
    const renderComponent = () => render(<MovementHeader product={dummyData.product} />);

    it('should render correctly', () => {
        const screen = renderComponent();
        expect(screen).toMatchSnapshot();
    });

    it('should display a product name', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('product-name')).toBeDefined();
    });

    it('product name should match given value', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('product-name').children[0]).toBe(dummyData.product);
    });
});
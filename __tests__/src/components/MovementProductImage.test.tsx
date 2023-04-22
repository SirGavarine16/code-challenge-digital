import { render } from '@testing-library/react-native';

import MovementProductImage from '../../../src/components/MovementProductImage';
import { dummyData } from '../../../src/utils/tests';

describe('<MovementProductImage />' , () => {
    const renderComponent = () => render(<MovementProductImage image={dummyData.image} />);

    it('should render correctly', () => {
        expect(renderComponent()).toMatchSnapshot();
    });

    it('should render an image card', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('card-image')).toBeDefined();
    });

    it('should render an image', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('product-image')).toBeDefined();
    });
});
import { render } from '@testing-library/react-native';

import { Product } from '../../../src/interfaces';
import { MovementCard } from '../../../src/components';
import { NavigationWrapper } from '../../../src/utils/tests';

describe('<MovementCard />', () => {
    const dummyData: Product = {
        createdAt: "2022-12-09T10:20:00.909Z",
        product: "Fantastic Granite Bacon",
        points: 42416,
        image: "https://loremflickr.com/640/480/technics",
        is_redemption: false,
        id: "3"
    }

    const renderComponent = () => render(<MovementCard item={dummyData} />, { wrapper: NavigationWrapper })

    it('should render correctly', () => {
        const screen = renderComponent();
        expect(screen).toMatchSnapshot();
    });

    it('should render an image', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('image')).toBeDefined();
    });

    it('should display the name', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('name').children[0]).toBe(dummyData.product);
    });

    it('should display the date parsed', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('date').children[0]).toBe('9 de diciembre, 2022');
    });

    it('should render a points icon', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('points-icon')).toBeDefined();
    });

    it('should render the product points', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('points').children[0]).toBe(dummyData.points.toString());
    });
});

import { render } from '@testing-library/react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Movement } from '../../../src/screens';
import {  dummyData } from '../../../src/utils/tests';
import { AppStackParams } from '../../../src/navigation/AppStack';

describe('<Movement />', () => {

    const renderComponent = () => render(
        <Movement
            route={{ params: dummyData } as RouteProp<AppStackParams, 'MovementScreen'>}
            navigation={{} as StackNavigationProp<AppStackParams, 'MovementScreen'>}
        />
    );

    it('should render correctly', () => {
        expect(renderComponent()).toMatchSnapshot();
    });

    it('should render an accept button', () => {
        const { getByText } = renderComponent();
        expect(getByText('Aceptar')).toBeDefined();
    });

    it('should display the product image', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('card-image')).toBeDefined();
        expect(getByTestId('product-image')).toBeDefined();
    });

    it('should render product details label', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('product-details')).toBeDefined();
    });

    it('should render points details label', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('points-details')).toBeDefined();
    });

    it('should render product details label', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('sale-date')).toBeDefined();
    });

    it('should render points details label', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('points')).toBeDefined();
    });
});
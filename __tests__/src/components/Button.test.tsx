import { fireEvent, render } from '@testing-library/react-native';

import { Button } from '../../../src/components';

describe('<Button />', () => {
    it('should render correctly', () => {
        expect(render(<Button />)).toMatchSnapshot();
    });

    it('should render a title', () => {
        const { getByTestId } = render(<Button />); 
        expect(getByTestId('button-title')).toBeDefined();
    });

    it('should render the given title', () => {
        const title = 'Click me!'
        const { getByText } = render(<Button title={title} />);
        expect(getByText(title).children[0]).toBe(title);
    });

    it('should call the onPress function', () => {
        const onButtonPress = jest.fn();
        const { getByTestId } = render(<Button onPress={onButtonPress} />);
        fireEvent.press(getByTestId('button'));
        expect(onButtonPress).toBeCalledTimes(1);
    });
});
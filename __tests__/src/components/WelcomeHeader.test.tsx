import { render } from '@testing-library/react-native';

import { WelcomeHeader } from '../../../src/components';

describe('<WelcomeHeader />', () => {
    it('should render a welcome message', () => {
        const { getByTestId } = render(<WelcomeHeader />);
        expect(getByTestId('welcome-message')).toBeDefined();
    });

    it('should render user name', () => {
        const { getByTestId } = render(<WelcomeHeader />);
        expect(getByTestId('user-name')).toBeDefined();
    });

    it('welcome message should match with provided value', () => {
        const value = 'Bienvenido!';
        const { getByTestId } = render(<WelcomeHeader message={value} />);
        expect(getByTestId('welcome-message').children[0]).toBe(value);
    });

    it('user name should match with provided value', () => {
        const value = 'Alonso Guerra';
        const { getByTestId } = render(<WelcomeHeader username={value} />);
        expect(getByTestId('user-name').children[0]).toBe(value);
    });
});
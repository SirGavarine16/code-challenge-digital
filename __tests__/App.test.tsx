import { render } from '@testing-library/react-native';

import App from '../App';

describe('<App />', () => {
    it('renders correctly', () => {
        const screen = render(<App />);
        expect(screen).toMatchSnapshot();
    });
});
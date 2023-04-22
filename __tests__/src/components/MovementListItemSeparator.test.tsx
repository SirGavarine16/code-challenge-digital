import { render } from '@testing-library/react-native';

import { MovementListItemSeparator } from '../../../src/components';

describe('<MovementItemListItemSeparator />', () => {
    it('should render correctly', () => {
        expect(render(<MovementListItemSeparator />)).toMatchSnapshot();
    });
});

import { act, renderHook, waitFor } from '@testing-library/react-native';

import { useMovementsListControl } from '../../../src/hooks';
import { ReduxWrapper } from '../../../src/utils/tests';
import { Product } from '../../../src/interfaces';

describe('useMovementsListControl', () => {
    const render = (isTesting = false) => renderHook(() => useMovementsListControl(isTesting), { wrapper: ReduxWrapper });

    const anItemHasRedemptionInTrue = (array: Product[]) => {
        let hasRedemptionInTrue = false;
        array.forEach(product => {
            if (product.is_redemption === true) hasRedemptionInTrue = true;
        });
        return hasRedemptionInTrue;
    };

    it('should return the correct values and functions', () => {
        const { result } = render();
        expect(result.current).toEqual({
            filter: expect.any(String),
            data: expect.any(Array),
            showPositiveMovements: expect.any(Function),
            showNegativeMovements: expect.any(Function),
            resetFilter: expect.any(Function),
        });
    });

    it('resetFilter should return filter value to initial state', () => {
        const { result } = render();
        const { resetFilter } = result.current;
        act(() => resetFilter());
        expect(result.current.filter).toBe('');
    });

    it('showPositiveMovements should render only data with is_redemption in false', async () => {
        const { result } = render(true);
        await waitFor(() => expect(result.current.products!.length).toBeGreaterThan(0));
        act(() => result.current.showPositiveMovements());
        expect(anItemHasRedemptionInTrue(result.current.data)).toBeFalsy();
    }); 

    it('showNegativeMovements should render only data with is_redemption in true', async () => {
        const { result } = render(true);
        await waitFor(() => expect(result.current.products!.length).toBeGreaterThan(0));
        act(() => result.current.showNegativeMovements());
        expect(anItemHasRedemptionInTrue(result.current.data)).toBeTruthy();
    }); 
});
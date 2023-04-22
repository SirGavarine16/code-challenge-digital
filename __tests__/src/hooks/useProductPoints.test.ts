import { renderHook, waitFor } from '@testing-library/react-native';

import { useProductPoints } from '../../../src/hooks';
import { ReduxWrapper } from '../../../src/utils/tests';

describe('useProductPoints', () => {
    it('should return totalPoints as undefined', () => {
        const { result } = renderHook(() => useProductPoints(true), { wrapper: ReduxWrapper });
        expect(result.current.totalPoints).toBeUndefined();
    });

    it('should return a number with the calculated amount of points', async () => {
        const { result } = renderHook(() => useProductPoints(true), { wrapper: ReduxWrapper });
        await waitFor(
            () => expect(result.current.products!.length).toBeGreaterThan(0)
        );
        const { totalPoints } = result.current;

        expect(totalPoints).toEqual(expect.any(Number));
    });
});

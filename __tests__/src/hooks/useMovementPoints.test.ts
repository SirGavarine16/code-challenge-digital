import { renderHook, waitFor } from '@testing-library/react-native';

import { useMovementPoints } from '../../../src/hooks';
import { ReduxWrapper } from '../../../src/utils/tests';

describe('useMovementPoints', () => {
    it('should return totalPoints as 0', () => {
        const { result } = renderHook(() => useMovementPoints(true), { wrapper: ReduxWrapper });
        expect(result.current.totalPoints).toBe(0);
    });

    it('should return a number with the calculated amount of points', async () => {
        const { result } = renderHook(() => useMovementPoints(true), { wrapper: ReduxWrapper });
        await waitFor(
            () => expect(result.current.movements!.length).toBeGreaterThan(0)
        );
        const { totalPoints } = result.current;

        expect(totalPoints).toEqual(expect.any(Number));
    });
});

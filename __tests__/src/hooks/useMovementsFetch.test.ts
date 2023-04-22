import { renderHook, waitFor } from '@testing-library/react-native';

import { useMovementsFetch } from '../../../src/hooks';
import { ReduxWrapper } from '../../../src/utils/tests';

describe('useMovementsFetch', () => {
    it('should return an object with a movements array and isLoading boolean', () => {
        const { result } = renderHook(() => useMovementsFetch(), { wrapper: ReduxWrapper });
        expect(result.current).toEqual({
            movements: expect.any(Array),
            isLoading: expect.any(Boolean),
        });
    });

    it('should return an array of movements', async () => {
        const { result } = renderHook(() => useMovementsFetch(), { wrapper: ReduxWrapper });
        await waitFor(
            () => expect(result.current.movements.length).toBeGreaterThan(0)
        );
        const { movements } = result.current;

        expect(movements[0]).toEqual({
            id: expect.any(String),
            product: expect.any(String),
            points: expect.any(Number),
            image: expect.any(String),
            is_redemption: expect.any(Boolean),
            createdAt: expect.any(String),
        });
    });
});

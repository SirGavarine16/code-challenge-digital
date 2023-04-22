import { renderHook, waitFor } from '@testing-library/react-native';

import { useProductsFetch } from '../../../src/hooks';
import { ReduxWrapper } from '../../../src/utils/tests';

describe('useProductsFetch', () => {
    it('should return an object with a products array and isLoading boolean', () => {
        const { result } = renderHook(() => useProductsFetch(), { wrapper: ReduxWrapper });
        expect(result.current).toEqual({
            products: expect.any(Array),
            isLoading: expect.any(Boolean),
        });
    });

    it('should return an array of products', async () => {
        const { result } = renderHook(() => useProductsFetch(), { wrapper: ReduxWrapper });
        await waitFor(
            () => expect(result.current.products.length).toBeGreaterThan(0)
        );
        const { products } = result.current;

        expect(products[0]).toEqual({
            id: expect.any(String),
            product: expect.any(String),
            points: expect.any(Number),
            image: expect.any(String),
            is_redemption: expect.any(Boolean),
            createdAt: expect.any(String),
        });
    });
});

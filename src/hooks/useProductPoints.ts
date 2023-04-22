import { useEffect, useMemo } from 'react';

import useAppSelector from './useAppSelector'
import useAppDispatch from './useAppDispatch';
import { fetchProducts } from '../redux/slices/productsSlice';

const useProductPoints = (isTesting: boolean = false) => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector(state => state.products);

    // Only to populate products in unit testing.
    useEffect(() => {
        if (isTesting) dispatch(fetchProducts());
    }, []);

    const totalPoints = useMemo(() => {
        if (products.length === 0) return undefined;

        let totalPoints = 0;
        products.forEach(({ is_redemption, points }) => {
            is_redemption
                ? totalPoints += points
                : totalPoints -= points;
        });
        return totalPoints;
    }, [products]);

    // Only returns products in unit testing.
    return isTesting
        ? { totalPoints, products }
        : { totalPoints };
}

export default useProductPoints;

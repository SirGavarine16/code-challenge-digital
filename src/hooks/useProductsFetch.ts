import { useEffect } from 'react';

import useAppSelector from './useAppSelector'
import useAppDispatch from './useAppDispatch';
import { fetchProducts } from '../redux/slices/productsSlice';

const useProductsFetch = () => {
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector(state => state.ui);
    const { products } = useAppSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return {
        isLoading,
        products,
    }
}

export default useProductsFetch;
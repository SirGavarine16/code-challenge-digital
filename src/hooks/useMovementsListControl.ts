import { useEffect, useMemo, useState } from 'react';

import useAppSelector from './useAppSelector';
import useAppDispatch from './useAppDispatch';
import { fetchProducts } from '../redux/slices/productsSlice';

type MovementsFilter = '' | 'positive' | 'negative';

const useMovementsListControl = (isTesting = false) => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector(state => state.products);

    const [filter, setFilter] = useState<MovementsFilter>('');

    useEffect(() => {
        if (isTesting) dispatch(fetchProducts());
    }, []);

    const getFilteredProducts = () => {
        switch(filter) {
            case 'positive':
                return products.filter(product => product.is_redemption === false);
            case 'negative':
                return products.filter(product => product.is_redemption === true);
            default:
                return products;
        };
    }

    const data = useMemo(() => {
        if (filter === '') return products;
        return getFilteredProducts();
    }, [products, filter, filter]);

    const resetFilter = () => {
        setFilter('');
    }

    const filterMovements = (filter: MovementsFilter) => {
        setFilter(filter);
    }

    const showPositiveMovements = () => {
        filterMovements('positive');
    }

    const showNegativeMovements = ()  => {
        filterMovements('negative');
    }

    return isTesting
        ? { products, filter, data, resetFilter, showPositiveMovements, showNegativeMovements }
        : { filter, data, resetFilter, showPositiveMovements, showNegativeMovements  };
}

export default useMovementsListControl;
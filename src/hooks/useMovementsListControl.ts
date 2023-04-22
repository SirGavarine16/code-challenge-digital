import { useEffect, useMemo, useState } from 'react';

import useAppSelector from './useAppSelector';
import useAppDispatch from './useAppDispatch';
import { fetchMovements } from '../redux/slices/movementsSlice';

type MovementsFilter = '' | 'positive' | 'negative';

const useMovementsListControl = (isTesting = false) => {
    const dispatch = useAppDispatch();
    const { movements } = useAppSelector(state => state.movements);

    const [filter, setFilter] = useState<MovementsFilter>('');

    useEffect(() => {
        if (isTesting) dispatch(fetchMovements());
    }, []);

    const getFilteredMovements = () => {
        switch(filter) {
            case 'positive':
                return movements.filter(movement => movement.is_redemption === false);
            case 'negative':
                return movements.filter(movement => movement.is_redemption === true);
            default:
                return movements;
        };
    }

    const data = useMemo(() => {
        if (filter === '') return movements;
        return getFilteredMovements();
    }, [movements, filter, filter]);

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
        ? { movements, filter, data, resetFilter, showPositiveMovements, showNegativeMovements }
        : { filter, data, resetFilter, showPositiveMovements, showNegativeMovements  };
}

export default useMovementsListControl;
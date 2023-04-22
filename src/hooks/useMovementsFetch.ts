import { useEffect } from 'react';

import useAppSelector from './useAppSelector'
import useAppDispatch from './useAppDispatch';
import { fetchMovements } from '../redux/slices/movementsSlice';

const useMovementsFetch = () => {
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector(state => state.ui);
    const { movements } = useAppSelector(state => state.movements);

    useEffect(() => {
        dispatch(fetchMovements());
    }, []);

    return {
        isLoading,
        movements,
    }
}

export default useMovementsFetch;
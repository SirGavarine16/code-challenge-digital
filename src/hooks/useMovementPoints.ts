import { useEffect, useMemo } from 'react';

import useAppSelector from './useAppSelector'
import useAppDispatch from './useAppDispatch';
import { fetchMovements } from '../redux/slices/movementsSlice';

const useMovementPoints = (isTesting: boolean = false) => {
    const dispatch = useAppDispatch();
    const { movements } = useAppSelector(state => state.movements);

    // Only to populate movements in unit testing.
    useEffect(() => {
        if (isTesting) dispatch(fetchMovements());
    }, []);

    const totalPoints = useMemo(() => {
        let totalPoints = 0;
        movements.forEach(({ is_redemption, points }) => {
            is_redemption
                ? totalPoints += points
                : totalPoints -= points;
        });
        return totalPoints;
    }, [movements]);

    // Only returns products in unit testing.
    return isTesting
        ? { totalPoints, movements }
        : { totalPoints };
}

export default useMovementPoints;

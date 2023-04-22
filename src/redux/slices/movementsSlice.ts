import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../store';
import { Movement } from '../../interfaces';
import { finishLoading, startLoading } from './uiSlice';
import { mockApi } from '../../api';

interface MovementsState {
    movements: Movement[];
}

const initialState: MovementsState = {
    movements: [],
};

const movementsSlice = createSlice({
    name: 'Movements',
    initialState,
    reducers: {
        storeMovements(state, { payload }: PayloadAction<Movement[]>) {
            state.movements = payload;
        }
    },
});

export const {
    storeMovements,
} = movementsSlice.actions;

export const fetchMovements = (): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(startLoading());

            const { data } = await mockApi.get<Movement[]>('/products');

            dispatch(storeMovements(data))
            dispatch(finishLoading());
        } catch (error) {
            dispatch(finishLoading());
        }
    }
}

export default movementsSlice.reducer;
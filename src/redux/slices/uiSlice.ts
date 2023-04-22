import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
    isLoading: boolean;
}

const initialState: UIState = {
    isLoading: false,
};

const uiSlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        finishLoading(state) {
            state.isLoading = false;
        },
    },
});

export const {
    startLoading,
    finishLoading,
} = uiSlice.actions;

export default uiSlice.reducer;
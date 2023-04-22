import { Action, PreloadedState, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';

import { movementsReducer, uiReducer } from './slices';

// Root Reducer is created independently to obtain RootState type
export const rootReducer = combineReducers({
    ui: uiReducer,
    movements: movementsReducer,
});

export const setUpStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;

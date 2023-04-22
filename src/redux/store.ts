import { Action, PreloadedState, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';

import { productsReducer, uiReducer } from './slices';

// Root Reducer is created independently to obtain RootState type
export const rootReducer = combineReducers({
    ui: uiReducer,
    products: productsReducer,
});

export const setUpStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

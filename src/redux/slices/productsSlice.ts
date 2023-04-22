import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../store';
import { Product } from '../../interfaces';
import { finishLoading, startLoading } from './uiSlice';
import { mockApi } from '../../api';

interface ProductsState {
    products: Product[];
}

const initialState: ProductsState = {
    products: [],
};

const productsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        storeProducts(state, { payload }: PayloadAction<Product[]>) {
            state.products = payload;
        }
    },
});

export const {
    storeProducts,
} = productsSlice.actions;

export const fetchProducts = (): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(startLoading());

            const { data } = await mockApi.get<Product[]>('/products');

            dispatch(storeProducts(data))
            dispatch(finishLoading());
        } catch (error) {
            dispatch(finishLoading());
        }
    }
}

export default productsSlice.reducer;
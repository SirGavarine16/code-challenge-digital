import { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { Movement } from '../interfaces';
import { rootReducer } from '../redux/store';

export const dummyData: Movement = {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 42416,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: false,
    id: "3"
}

export const ReduxWrapper = ({ children }: PropsWithChildren<{}>) => {
    const store = configureStore({ reducer: rootReducer });
    return <Provider store={store}>{children}</Provider>
}

export const NavigationWrapper = ({ children }: PropsWithChildren<{}>) => {
    const store = configureStore({ reducer: rootReducer });
    return <NavigationContainer>{children}</NavigationContainer>
}
import { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { rootReducer } from '../redux/store';

export const SafeAreaWrapper = ({ children }: PropsWithChildren<{}>) => {
    return <SafeAreaProvider>{children}</SafeAreaProvider>
}

export const ReduxWrapper = ({ children }: PropsWithChildren<{}>) => {
    const store = configureStore({ reducer: rootReducer });
    return <Provider store={store}>{children}</Provider>
}

export const NavigationWrapper = ({ children }: PropsWithChildren<{}>) => {
    const store = configureStore({ reducer: rootReducer });
    return <NavigationContainer>{children}</NavigationContainer>
}
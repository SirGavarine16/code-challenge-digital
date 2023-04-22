import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';

import { Home, Product } from '../screens';
import { Product as ProductData } from '../interfaces';

export type AppStackParams = {
    HomeScreen: undefined;
    ProductScreen: ProductData;
};

const Stack = createStackNavigator<AppStackParams>();

const screenOptions: StackNavigationOptions = {
    headerShown: false,
};

export const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name='HomeScreen' component={Home} />
            <Stack.Screen name='ProductScreen' component={Product} />
        </Stack.Navigator>
    )
};

export default AppStack;

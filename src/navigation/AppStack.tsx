import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';

import { Home, Movement } from '../screens';
import { Movement as MovementData } from '../interfaces';

export type AppStackParams = {
    HomeScreen: undefined;
    MovementScreen: MovementData;
};

const Stack = createStackNavigator<AppStackParams>();

const screenOptions: StackNavigationOptions = {
    headerShown: false,
};

export const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name='HomeScreen' component={Home} />
            <Stack.Screen name='MovementScreen' component={Movement} />
        </Stack.Navigator>
    )
};

export default AppStack;

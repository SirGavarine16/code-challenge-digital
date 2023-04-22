import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { AppStack } from './src/navigation';
import { AppTheme } from './src/themes';
import { store } from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={AppTheme}>
        <AppStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
};

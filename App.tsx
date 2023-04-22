import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './src/navigation';
import { AppTheme } from './src/themes';

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      <AppStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

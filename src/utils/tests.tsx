import { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export const SafeAreaWrapper = ({ children }: PropsWithChildren<{}>) => {
    return <SafeAreaProvider>{children}</SafeAreaProvider>
}


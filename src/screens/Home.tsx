import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WelcomeHeader } from '../components';
import { useProductsFetch } from '../hooks';

interface Props {
}

const Home: FC<Props> = () => {
    const { container } = styles;
    const { top: paddingTop, bottom: paddingBottom } = useSafeAreaInsets();
    
    return (
        <View style={[container, { paddingTop, paddingBottom }]}>
            <WelcomeHeader />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    }
});

export default Home;

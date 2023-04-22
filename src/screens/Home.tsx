import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PointsDisplay, WelcomeHeader } from '../components';
import { useProductPoints, useProductsFetch } from '../hooks';

interface Props {
}

const Home: FC<Props> = () => {
    const { container } = styles;
    const { top: paddingTop, bottom: paddingBottom } = useSafeAreaInsets();

    const { products } = useProductsFetch();
    const { totalPoints } = useProductPoints();

    return (
        <View style={[container, { paddingTop, paddingBottom }]}>
            <WelcomeHeader />
            <PointsDisplay points={totalPoints} />
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

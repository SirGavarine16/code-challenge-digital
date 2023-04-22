import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MovementsList, PointsDisplay, WelcomeHeader } from '../components';
import { useMovementsFetch, useMovementPoints } from '../hooks';
import { spacing } from '../themes/AppTheme';

interface Props {
}

const Home: FC<Props> = () => {
    const { container } = styles;
    const { top: paddingTop, bottom: paddingBottom } = useSafeAreaInsets();

    const { movements } = useMovementsFetch();
    const { totalPoints } = useMovementPoints();

    return (
        <View style={[container, { paddingTop, paddingBottom }]}>
            <WelcomeHeader />
            <PointsDisplay points={totalPoints} />
            <MovementsList bottom={paddingBottom} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: spacing.paddingHorizontal,
    }
});

export default Home;

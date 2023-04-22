import React, { FC, useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';

import { Button, MovementHeader, MovementProductImage } from '../components';
import { AppStackParams } from '../navigation/AppStack';
import { colors, spacing } from '../themes/AppTheme';
import { formatDate } from '../utils/formats';
import { useAnimations } from '../hooks';

interface Props extends StackScreenProps<AppStackParams, 'MovementScreen'> {
}

const Movement: FC<Props> = ({ route, navigation }) => {
    const { product, image, createdAt, is_redemption, points } = route.params;
    const { container, contentContainer, dataContainer, descriptionLabel, dateLabel, pointsLabel } = styles;

    const { top, bottom } = useSafeAreaInsets();
    const { fadeIn, fadeOut, movePosition, opacity, position } = useAnimations();

    useEffect(() => {
        fadeIn();
        movePosition(100, 600);
        return () => {
            fadeOut();
        }
    }, []);

    return (
        <View style={[container, { paddingBottom: bottom === 0 ? 20 : bottom }]}>
            <MovementHeader product={product} top={top} />
            <View style={contentContainer}>
                <MovementProductImage image={image} />
                <View style={dataContainer}>
                    <Text testID='product-details' style={descriptionLabel}>
                        Detalles del producto:
                    </Text>
                    <Text testID='sale-date' style={dateLabel}>
                        {`Comprado el ${formatDate(createdAt)}`}
                    </Text>
                    <Text testID='points-details' style={descriptionLabel}>
                        Con esta compra {is_redemption ? 'canjeaste' : 'acumulaste'}:
                    </Text>
                    <Text testID='points' style={pointsLabel}>
                        {points} puntos
                    </Text>
                </View>
                <Animated.View style={{ opacity, transform: [{ translateX: position }] }}>
                    <Button title='Aceptar' onPress={() => navigation.navigate('HomeScreen')} />
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: spacing.paddingHorizontal,
    },
    dataContainer: {
        marginTop: 32,
        flex: 1,
    },
    descriptionLabel: {
        color: colors.textSecondary,
        fontSize: 14,
        fontWeight: '800',
    },
    dateLabel: {
        fontSize: 16,
        fontWeight: '800',
        marginVertical: 20,
    },
    pointsLabel: {
        fontSize: 24,
        fontWeight: '800',
        marginVertical: 32,
    }
})

export default Movement;

import React, { FC, useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { formatToScore } from '../utils/formats';
import SectionLabel from './SectionLabel';
import { useAnimations } from '../hooks';

interface Props {
    label?: string;
    month?: string;
    points?: number;
}

const PointsDisplay: FC<Props> = ({ label = 'Tus puntos', month = 'Diciembre', points = 1000 }) => {
    const { container, cardContainer, monthLabel, scoreLabel } = styles;
    const { colors } = useTheme();

    const { fadeIn, fadeOut, opacity, movePosition, position } = useAnimations();

    useEffect(() => {
        fadeIn();
        movePosition(-100, 500, false);
        return () => {
            fadeOut();
        }
    }, [])

    return (
        <View style={container}>
            <SectionLabel label={label} />
            <Animated.View testID='points-card' style={[cardContainer, { backgroundColor: colors.primary, opacity, transform: [{ translateX: position }] }]}>
                <Text testID='month-label' style={monthLabel}>
                    {month}
                </Text>
                <Text testID='points-label' style={scoreLabel}>
                    {formatToScore(points)}
                </Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    cardContainer: {
        marginHorizontal: 20,
        borderRadius: 20,
        height: 150,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        alignItems: 'center',
    },
    monthLabel: {
        color: 'white',
        fontSize: 16,
        fontWeight: '800',
        textTransform: 'capitalize',
        alignSelf: 'flex-start',
    },
    scoreLabel: {
        width: '100%',
        color: 'white',
        position: 'absolute',
        fontSize: 32,
        fontWeight: '800',
        top: '50%',
        textAlign: 'center'
    },
});

export default PointsDisplay;

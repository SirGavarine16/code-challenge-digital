import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { formatToScore } from '../utils/formats';

interface Props {
    label?: string;
    month?: string;
    points?: number;
}

const PointsDisplay: FC<Props> = ({ label = 'Tus puntos', month = 'Diciembre', points = 1000 }) => {
    const { pointsLabel, cardContainer, monthLabel, scoreLabel } = styles;
    const { colors } = useTheme();

    return (
        <View>
            <Text testID='display-label' style={pointsLabel} >
                {label}
            </Text>
            <View testID='points-card' style={[cardContainer, { backgroundColor: colors.primary }]}>
                <Text testID='month-label' style={monthLabel}>
                    {month}
                </Text>
                <Text testID='points-label' style={scoreLabel}>
                    {formatToScore(points)}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pointsLabel: {
        color: '#9B9898',
        fontSize: 14,
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    cardContainer: {
        marginTop: 20,
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
        alignItems: 'center'
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
})

export default PointsDisplay;

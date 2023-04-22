import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors } from '../themes/AppTheme';

interface Props {
    message?: string;
}

const EmptyMovementsList: FC<Props> = ({ message = 'No hay movimientos disponibles.' }) => {
    return (
        <Text testID='empty-message' style={styles.text}>
            {message}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
    }
});

export default EmptyMovementsList;

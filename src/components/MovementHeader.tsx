import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '../themes/AppTheme';

interface Props {
    product?: string;
    top?: number;
}

const MovementHeader: FC<Props> = ({ product = 'Nombre del producto', top = 0 }) => {
    const { container, text } = styles;

    return (
        <View style={[container, { paddingTop: top + 80 }]}>
            <Text testID='product-name' style={text}>
                {product}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingHorizontal: spacing.paddingHorizontal,
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 10,
    }
})

export default MovementHeader;

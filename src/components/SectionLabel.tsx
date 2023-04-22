import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors } from '../themes/AppTheme';

interface Props {
    label?: string; 
}

const SectionLabel: FC<Props> = ({ label = '' }) => {
    const { text } = styles;

    return (
        <Text testID='section-label' style={text} >
            {label}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        color: colors.textSecondary,
        fontSize: 14,
        fontWeight: '800',
        textTransform: 'uppercase',
        marginBottom: 20,
    }
});

export default SectionLabel;

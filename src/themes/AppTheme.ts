import { DefaultTheme, Theme } from '@react-navigation/native';

export const colors = {
    primary: '#334FFA',
    background: '#F8F8F8',
    secondary: '#CFD6FF',
    textSecondary: '#9B9898',
}

export const spacing = {
    paddingHorizontal: 20,
}

const AppTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary, 
        background: colors.background,
    }
};

export default AppTheme;
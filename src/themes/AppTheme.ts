import { DefaultTheme, Theme } from '@react-navigation/native';

export const colors = {
    primary: '#334FFA',
    background: '#F8F8F8',
}

const AppTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...colors,
    }
};

export default AppTheme;
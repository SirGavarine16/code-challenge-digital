import AppTheme, { colors } from '../../../src/themes/AppTheme';

describe('AppTheme', () => {
    it('colors should be an object with primary and background colors as strings', () => {
        expect(colors).toEqual({
            primary: expect.any(String),
            secondary: expect.any(String),
            background: expect.any(String),
        });
    });

    it('AppTheme should have all fields as a React Navigation theme', () => {
        expect(AppTheme).toEqual({
            dark: expect.any(Boolean),
            colors: {
                primary: expect.any(String),
                background: expect.any(String),
                card: expect.any(String),
                text: expect.any(String),
                border: expect.any(String),
                notification: expect.any(String),
            },
        });
    })

    it('AppTheme primary color should be the same as the primary color in colors object', () => {
        expect(AppTheme.colors.primary).toBe(colors.primary);
    });

    it('AppTheme background color should be the same as the background color in colors object', () => {
        expect(AppTheme.colors.background).toBe(colors.background);
    });
});
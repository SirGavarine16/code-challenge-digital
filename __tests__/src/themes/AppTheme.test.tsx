import AppTheme, { colors, spacing } from '../../../src/themes/AppTheme';

describe('AppTheme', () => {
    it('colors should be a valid colors object', () => {
        expect(colors).toEqual({
            primary: expect.any(String),
            secondary: expect.any(String),
            background: expect.any(String),
            textSecondary: expect.any(String),
        });
    });

    it('spacing should be a valid spacing object', () => {
        expect(spacing).toEqual({
            paddingHorizontal: expect.any(Number),
        })
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
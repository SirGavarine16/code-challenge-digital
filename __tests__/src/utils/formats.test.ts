import { formatDate, formatToScore } from '../../../src/utils/formats'

describe('formats', () => {
    it('formatToScore should return a formated score string with the given value', () => {
        expect(formatToScore(3000)).toBe('3,000.00 pts');
    });

    it('formatDate should return a formated date string with the given value', () => {
        expect(formatDate('2022-12-09T10:20:00.909Z')).toBe('9 de diciembre, 2022');
    });
});
import { formatToScore } from '../../../src/utils/formats'

describe('formats', () => {
    it('should return a formated score string with the given points', () => {
        expect(formatToScore(3000)).toBe('3,000.00 pts');
    });
});
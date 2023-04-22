import { render } from '@testing-library/react-native';
import { PointsDisplay } from '../../../src/components';
import { formatToScore } from '../../../src/utils/formats';

describe('<PointsDisplay />', () => {
    it('should render correctly', () => {
        const screen = render(<PointsDisplay />);
        expect(screen).toMatchSnapshot();
    });

    it('should have a label', () => {
        const { getByTestId } = render(<PointsDisplay />);
        expect(getByTestId('display-label')).toBeDefined(); 
    });

    it('should display the month', () => {
        const { getByTestId } = render(<PointsDisplay />);
        expect(getByTestId('month-label')).toBeDefined(); 
    });

    it('should have a points card', () => {
        const { getByTestId } = render(<PointsDisplay />);
        expect(getByTestId('points-card')).toBeDefined(); 
    });

    it('should display the given label', () => {
        const label = 'Puntaje';
        const { getByText } = render(<PointsDisplay label={label} />);
        expect(getByText(label).children[0]).toBe(label); 
    })

    it('should display the given month', () => {
        const month = 'Enero';
        const { getByText } = render(<PointsDisplay month={month} />);
        expect(getByText(month).children[0]).toBe(month); 
    });

    it('should display the given ammount of points', () => {
        const points = 3000;

        const { getByText } = render(<PointsDisplay points={points}  />);

        expect(getByText(formatToScore(3000))).toBeDefined();
    });
});

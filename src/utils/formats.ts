import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';

export const formatToScore = (number: number) => {
    const score = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(number).replaceAll('$', '');
    return `${score} pts`;
}

export const formatDate = (date: string) => {
    return dayjs(date).locale('es-mx').format('D [de] MMMM, YYYY');
}
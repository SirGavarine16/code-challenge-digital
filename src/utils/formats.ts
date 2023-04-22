export const formatToScore = (number: number) => {
    const score = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(number).replaceAll('$', '');
    return `${score} pts`;
}
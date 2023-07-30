export const dateFormat = date => {
    const dateObj = date.split('T')[0].split('-');
    return dateObj[2] + '.' + dateObj[1] + '.' + dateObj[0];
};
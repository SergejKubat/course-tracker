export const convertDateToString = (date) => {
    const stringDate = date.toString();
    const stringArray = stringDate.split(' ');
    return `${stringArray[2]} ${stringArray[1]} ${stringArray[3]}`;
};

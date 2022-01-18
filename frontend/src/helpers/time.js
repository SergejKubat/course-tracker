export const breakTime = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
        year: date.getFullYear(),
        monthName: months[date.getMonth()],
        month: date.getMonth(),
        day: date.getDate(),
        hour: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds()
    };
};

export const timeSince = (date, short) => {
    var seconds = Math.floor((new Date() - date) / 1000);
    if (seconds / 691199 > 1) {
        const datebreak = breakTime(date);
        return `${datebreak.day} ${datebreak.monthName} ${datebreak.year.toString().substr(2, 2)}`;
    }
    if (seconds / 86399 > 1) {
        return Math.floor(seconds / 86400) + 'd' + (short ? '' : ' ago');
    }
    if (seconds / 3599 > 1) {
        return Math.floor(seconds / 3600) + 'h' + (short ? '' : ' ago');
    }
    if (seconds / 59 > 1) {
        return Math.floor(seconds / 60) + 'm' + (short ? '' : ' ago');
    }
    return short ? '1m' : 'Less than 1m ago';
};

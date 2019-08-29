export const months:Record<string, string[]> = {
    short: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    full: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
}

const ordinal:Record<string, string> = {
    default: 'th',
    '1': 'st',
    '2': 'nd',
    '3': 'rd'
};

export const getOrdinal = (number:any) => {
    const stringifiedNumber = Number(number).toString();
    const lastDigit = stringifiedNumber.substring(stringifiedNumber.length - 1)
    console.log('Last digit: ', lastDigit);
    if (ordinal[lastDigit]) {
        return ordinal[lastDigit];
    } else {
        return ordinal.default;
    }
};

export const stringLeadingZeros = (number:any) => {
    const stringifiedNumber = Number(number).toString();
    const firstDigit = stringifiedNumber.substring(0, 1);
    if (firstDigit === '0') {
        return stringifiedNumber.substring(1);
    } else {
        return stringifiedNumber;
    }
};
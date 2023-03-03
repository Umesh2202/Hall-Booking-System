const date = new Date();
const month = date.getMonth();
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[date.getDay()];

export const crr_year = date.getFullYear();
export const crr_month = months[month];
export const crr_date = date.getDate();
export const crr_day = dayName;

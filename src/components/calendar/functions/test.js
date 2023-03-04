export const extractDatesAndName = async (data) => {
	console.log(data.bookings);
	const eventName = data.bookings[0].eventName;

	const stSec = data.bookings[0].startDate.seconds;
	const edSec = data.bookings[0].endDate.seconds;

	let date = new Date(1970, 0, 2);
	date.setSeconds(stSec);
	const startDate = date.toLocaleDateString();

	date = new Date(1970, 0, 2);
	date.setSeconds(edSec);
	const endDate = date.toLocaleDateString();

	const info = { eventName: eventName, startDate: startDate, endDate: endDate };
	console.log(info);
};

import type { infoType } from '../../../types/infoType';

export const extractBookingInfo = (data: {
	bookings: {
		endDate: { seconds: number };
		startDate: { seconds: number };
		eventName: { name: string };
	}[];
}) => {
	const bookings = data.bookings;
	const info: object[] = [];
	info.pop();

	for (let i = 0; i < bookings.length; i++) {
		const eventName = data.bookings[i].eventName;

		const stSec = data.bookings[i].startDate.seconds;
		const edSec = data.bookings[i].endDate.seconds;

		info.push({ eventName: eventName, startDate: stSec, endDate: edSec });
	}

	return info;
};

export const convertSecToDate = (data: infoType[]) => {
	const info: object[] = [];
	info.pop();
	for (let i = 0; i < data.length; i++) {
		const stSec = data[i].startDate.seconds;
		let date = new Date(1970, 0, 1);
		date.setSeconds(JSON.parse(stSec));
		const startDate = date.toLocaleDateString();

		const edSec = data[i].endDate.seconds;
		date = new Date(1970, 0, 1);
		date.setSeconds(JSON.parse(edSec));
		const endDate = date.toLocaleDateString();

		info.push({
			eventName: data[i].eventName,
			startDate: startDate,
			endDate: endDate,
			userId: data[i].userId
		});
	}

	return info;
};

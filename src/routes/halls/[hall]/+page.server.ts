import axios from 'axios';
import { extractBookingInfo } from '../../../components/calendar/functions/bookingInfo';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const res = await axios.get('http://localhost:5173/api/halls');
	let data = res.data;
	data = data.filter((el: { id: '' }) => {
		return el['id'] === params.hall;
	});

	const bookingsInfo = extractBookingInfo(data[0]);

	return {
		halls: data[0],
		bookings: bookingsInfo
	};
}) satisfies PageServerLoad;

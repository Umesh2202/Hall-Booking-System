import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';
import { colRef } from '../halls/firebase';
import { doc, getDocs, Timestamp, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { convertSecToDate } from '../../../components/calendar/functions/bookingInfo';

export const GET: RequestHandler = async () => {
	const ss = await getDocs(colRef);
	const infos: [object] = [{}];
	infos.pop();

	ss.docs.forEach((doc: { data: () => object; id: string }) => {
		infos.push({ ...doc.data(), id: doc.id });
	});
	return json(infos);
};

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	//* Start date
	let startDate = body['startDate'];

	//* End date
	let endDate = body['endDate'];

	const eventName = body['eventName'];
	const userId = body['userId'];
	const purpose = body['purpose'];
	let crrBookingInfo = body['bookings'];
	crrBookingInfo = convertSecToDate(crrBookingInfo);
	console.log(crrBookingInfo);

	const docRef = doc(colRef, body['id']);

	if (purpose === 0) {
		startDate = Timestamp.fromDate(new Date(startDate)).toDate();
		endDate = Timestamp.fromDate(new Date(endDate)).toDate();

		//* For booking
		await updateDoc(docRef, {
			bookings: arrayUnion({
				eventName: eventName,
				startDate: startDate,
				endDate: endDate,
				userId: `${userId}`
			})
		});
	} else if (purpose === 1) {
		//* For deleting: first filtering the bookings of the current user using the userid
		crrBookingInfo = crrBookingInfo.filter((el: never) => {
			return el['startDate'] !== startDate && el['endDate'] !== endDate && el['userId'];
		});

		crrBookingInfo = crrBookingInfo.map((el: { startDate: Date; endDate: Date }) => {
			el['startDate'] = new Date(el['startDate']);
			el['startDate'].setDate(el['startDate'].getDate() + 1);
			el['startDate'] = Timestamp.fromDate(new Date(el['startDate'])).toDate();

			el['endDate'] = new Date(el['endDate']);
			el['endDate'].setDate(el['endDate'].getDate() + 1);
			el['endDate'] = Timestamp.fromDate(new Date(el['endDate'])).toDate();

			return el;
		});

		// console.log(eventName, startDate, endDate, userId);
		// await updateDoc(docRef, {
		// 	bookings: [...crrBookingInfo]
		// });
		console.log(crrBookingInfo);
	}

	return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
};

import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';
import { colRef } from '../halls/firebase';
import { doc, getDocs, Timestamp, updateDoc, arrayUnion } from 'firebase/firestore';

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
	let startDate = body['startDate'];
	let endDate = body['endDate'];
	const eventName = body['eventName'];
	const userId = body['userId'];
	console.log('type: ', typeof userId);
	startDate = Timestamp.fromDate(new Date(startDate)).toDate();

	endDate = Timestamp.fromDate(new Date(endDate)).toDate();
	console.log(Timestamp.fromDate(new Date()).toDate());
	console.log(body['id']);

	const docRef = doc(colRef, body['id']);

	await updateDoc(docRef, {
		bookings: arrayUnion({
			eventName: eventName,
			startDate: startDate,
			endDate: endDate,
			userId: `${userId}`
		})
	});

	return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
};

import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';
import { colRef } from './firebase';
import { getDocs, addDoc } from 'firebase/firestore';

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
	console.log(body);
	const docRef = await addDoc(colRef, {
		name: body['name'],
		incharge: body['incharge'],
		desc: body['desc'],
		location: body['location'],
		capacity: body['capacity'],
		contact: body['contact'],
		bookings: []
	});
	console.log('Added doc with id:', docRef.id);

	return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
};

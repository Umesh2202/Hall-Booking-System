import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';
import { colRef } from './firebase';
import { getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';

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

export const DELETE: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const docRef = doc(colRef, body['id']);
	await deleteDoc(docRef);

	return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
};

export const PATCH: RequestHandler = async ({ request }) => {
	// console.log('nice');
	const body = await request.json();
	const docRef = doc(colRef, body['id']);

	const data = {
		name: body['name'],
		incharge: body['incharge'],
		desc: body['desc'],
		location: body['location'],
		capacity: body['capacity'],
		contact: body['contact']
	};

	updateDoc(docRef, data);
	return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
};

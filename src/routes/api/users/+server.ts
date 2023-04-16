import type { RequestHandler } from '@sveltejs/kit';
import { colRef } from './firebase';
import { addDoc } from 'firebase/firestore';

export const GET: RequestHandler = async () => {
	return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
};

export const POST: RequestHandler = async ({ request }) => {
	const { email, password } = await request.json();
	await addDoc(colRef, { email: email, password: password });
	return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
};

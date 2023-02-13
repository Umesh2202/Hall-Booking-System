import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';
import { colRef } from './firebase';
import { getDocs } from 'firebase/firestore';

export const GET: RequestHandler = async () => {
	const ss = await getDocs(colRef);
	const infos: [object] = [{}];

	ss.docs.forEach((doc: { data: () => object; id: string }) => {
		infos.push({ ...doc.data(), id: doc.id });
	});
	return json(infos);
};

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	console.log(body);

	return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
};

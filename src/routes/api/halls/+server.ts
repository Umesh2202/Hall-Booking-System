import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';
import { colRef } from './firebase';
import { getDocs } from 'firebase/firestore';

export const GET: RequestHandler = async () => {
	let ss: any = await getDocs(colRef);
	let infos: any[] = [];

	ss.docs.forEach((doc: any) => {
		infos.push({ ...doc.data(), id: doc.id });
	});
	return json(infos);
};

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	console.log(body);

	return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
};

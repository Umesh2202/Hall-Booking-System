import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';
import { colRef } from '../../firebase';
import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	doc,
	onSnapshot
} from 'firebase/firestore';

export const GET: RequestHandler = async () => {
	let ss: any = await getDocs(colRef);
	let dog;
	// ss = ss.docs;
	ss.docs.forEach((doc: any) => {
		dog = { ...doc.data(), id: doc.id };
		// return json(doc);
		// dog = doc;
	});
	// ss = ss[0];
	// ss = ss.data();
	return json({ dog });
};

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	console.log(body);

	return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
};

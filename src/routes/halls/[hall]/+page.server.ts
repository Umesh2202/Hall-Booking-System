import axios from 'axios';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async ({ params }) => {
	const res = await axios.get('http://localhost:5174/api/halls');
	let data = res.data;
	data = data.filter((el: { id: '' }) => {
		return el['id'] === params.hall;
	});

	return {
		halls: data[0]
	};
}) satisfies PageServerLoad;

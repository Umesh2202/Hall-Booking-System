import axios from 'axios';
import type { PageServerLoad } from './$types';
// import { redis } from '$lib/server/redis';

export const load = (async ({ params }) => {
	// const cached = await redis.get('data');

	// if (cached) {
	// data = JSON.parse(cached);
	// } else {
	const res = await axios.get('http://localhost:5174/api/halls');
	let data = res.data;
	// }

	data = data.filter((el: { id: '' }) => {
		return el['id'] === params.hall;
	});

	return {
		halls: data[0]
	};
}) satisfies PageServerLoad;

import axios from 'axios';
import type { PageServerLoad } from './$types';
import { redis } from '$lib/server/redis';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'edge'
};

export const load = (async ({ params }) => {
	let data;

	const cached = await redis.get('data');

	if (cached) {
		data = JSON.parse(cached);
	} else {
		const res = await axios.get('/api/halls');
		data = res.data;
	}

	data = data.filter((el: { id: '' }) => {
		return el['id'] === params.hall;
	});

	return {
		halls: data[0]
	};
}) satisfies PageServerLoad;

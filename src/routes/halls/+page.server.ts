import axios from 'axios';
import { redis } from '$lib/server/redis';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'edge'
};

export const load = async () => {
	let data;

	const cached = await redis.get('data');

	if (cached) {
		data = JSON.parse(cached);
	} else {
		const res = await axios.get('/api/halls');
		data = res.data;
		redis.set('data', JSON.stringify(data), 'EX', 600);
	}
	console.log('hi');

	return {
		halls: data
	};
};

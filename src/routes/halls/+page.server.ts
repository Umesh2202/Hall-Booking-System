import axios from 'axios';
// import { redis } from '$lib/server/redis';

export const load = async () => {
	// const cached = await redis.get('data');

	// if (cached) {
	// data = JSON.parse(cached);
	// } else {
	const res = await axios.get('http://localhost:5174/api/halls');
	const data = res.data;
	// redis.set('data', JSON.stringify(data), 'EX', 600);
	// }

	return {
		halls: data
	};
};

import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';

export const GET: RequestHandler = async () => {
	const posts = [
		{
			slug: 'sveltekit',
			content: `umesh`
		},
		{
			slug: 'sveltekit',
			content: `nice`
		}
	];

	return json(posts);
};

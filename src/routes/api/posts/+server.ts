import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';

export const GET: RequestHandler = async () => {
	const posts = [
		{
			slug: 'sveltekit',
			content: `<h1>SvelteKit</h1>
            <p>This data is from the server</p>`
		}
	];

	return json(posts);
};

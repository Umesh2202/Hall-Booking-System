import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			runtime: 'edge'
		})
		// prerender: {
		// 	// use relative URLs similar to an anchor tag <a href="/test/1"></a>
		// 	// do not include group layout folders in the path such as /(group)/test/1
		// 	entries: [`/halls/1`]
		// }
	}
};

export default config;

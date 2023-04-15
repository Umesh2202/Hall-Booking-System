import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
		// prerender: {
		// 	// use relative URLs similar to an anchor tag <a href="/test/1"></a>
		// 	// do not include group layout folders in the path such as /(group)/test/1
		// 	entries: [`/halls/1`]
		// }
	}
};

export default config;

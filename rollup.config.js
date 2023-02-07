import svelte from 'rollup-plugin-svelte';
import autoPreprocess from 'svelte-preprocess';

export default (theme) => ({
	// ... other configs

	plugins: [
		svelte({
			preprocess: autoPreprocess()
		})
	]
});

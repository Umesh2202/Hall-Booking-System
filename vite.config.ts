import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
// import { PORT } from '$env/static/private';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		port: 5174,
		strictPort: false
	},
	preview: {
		port: 4173,
		strictPort: false
	}
};

export default config;

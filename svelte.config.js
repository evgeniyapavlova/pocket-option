import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$lib: path.resolve('src/lib')
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/pocket-option' : ''
		}
	}
};

export default config;

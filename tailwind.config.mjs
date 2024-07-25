/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'beige': '#BFA89C',
			},
			fontFamily: {
				styleScript: ["Style Script", 'cursive'],
				dancingScript: ["Dancing Script", 'cursive'],
				vujahdayScript: ["Vujahday Script", 'cursive'],
				dancingScript: ["Dancing Script", 'cursive'],
				euphoriaScript: ["Euphoria Script", 'cursive'],
				robotoMono: ["Roboto Mono", 'monospace']
			},
			aspectRatio: {
				'4/3': '4 / 3',
				'1/2': '1 / 2',
			}
		},
	},
	plugins: [],
}

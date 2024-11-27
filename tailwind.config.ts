import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-roboto)']
  		},
  		colors: {
  			myblack: '#000000',
  			mywhite: '#F7F7F7',
  			mygray: '#676767',
  			mobilewhite: '#FFFFFF',
			placeholdergray: "#505050",
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		screens: {
  			mobile: '320px',
  			tablet: '481px',
  			laptop: '1280px	',
  			desktop: '1921px	'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		customstyles:{
				 textUnderlinePosition: "from-font",
				 textDecorationSkipInk: "none",			
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

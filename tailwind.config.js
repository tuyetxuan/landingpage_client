export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,html}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			"2lg": "1100px",
			xl: "1440px",
		},
		fontFamily: {
			InterTight: ["Roboto", "sans-serif"],
		},
		extend: {
			colors: {
				"white": "#ffffff",
				"black": "#000000",
				"blue": "#1781F5",
				"background-gray": "#A3A3A3",
				"background-secondary": "#1781F5",
				"background-primary": "#0066D0",
				"background-orange": "#F7B501",
				"background-yellow": "#FFED01",
				"text-orange": "#F7B501",
				"text-primary": "#101d2b",
				"text-secondary": "#626262",
			},
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			maxWidth: {
				container: "1160px",
				header: "1260px",
				headerFix: "1360px",
			},
			animation: {
				"gradient-x": "gradient-x 3s ease infinite",
				'bounce-smooth': 'bounce-smooth 2s ease-in-out infinite',
			},
			keyframes: {
				"gradient-x": {
					"0%, 100%": {
						"background-position": "0% 50%",
					},
					"50%": {
						"background-position": "100% 50%",
					},
				},
				'bounce-smooth': {
					'0%, 100%': {transform: 'translateY(0)'},
					'50%': {transform: 'translateY(-18px)'},
				},
			},
		},
	},
	plugins: [require('tailwind-scrollbar'), require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),],
};

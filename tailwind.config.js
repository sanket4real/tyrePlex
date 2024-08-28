export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			red: "#ed1c24",
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};

import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
	"@import": "../css/modernreset.css",
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "borderBox",
		fontWeight: "normal",
	},

	":root": {
		fontSize: "calc(14px + 0.32vh)",
		"@media screen and (min-width: 600px)": {
			fontSize: "calc(14px + 0.098vw)",
		},
	},

	li: {
		listStyleType: "none",
	},

	a: {
		display: "flex",
		textDecoration: "none",
		color: "inherit",
	},

	"&:focus:not(:focus-visible)": {
		outline: 0,
	},

	"@font-face": {
		fontFamily: "Inter",
		src: 'url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap")',
	},

	body: {
		fontFamily: `Inter, Helvetica, -apple-system,BlinkMacSystemFont, Segoe UI, Roboto Oxygen, Ubuntu, Cantarell Open Sans, Helvetica Neue,sans-serif`,
		letterSpacing: "-0.3px",
		fontSynthesis: "none",
		textRendering: "optimizeLegibility",
	},
});

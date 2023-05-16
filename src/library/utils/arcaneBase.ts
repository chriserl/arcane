import { globalCss } from "./stitches.config";

export const arcaneBase = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "borderBox",
		fontWeight: "410",
	},

	":root": {
		fontSize: "calc(14px + 0.32vh)",
		"@media screen and (min-width: 600px)": {
			fontSize: "calc(14px + 0.084vw)",
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

	button: {
		background: "transparent",
		border: "none",
	},

	input: {
		border: "none",
		outline: "none",
	},

	textarea: { border: "none", outline: "none" },

	"&:focus:not(:focus-visible)": {
		outline: 0,
	},

	body: {
		fontFamily: `Inter Tight, Inter, Helvetica, -apple-system,BlinkMacSystemFont, Segoe UI, Roboto Oxygen, Ubuntu, Cantarell Open Sans, Helvetica Neue,sans-serif`,
		letterSpacing: "-0.3px",
		fontSynthesis: "none",
		textRendering: "optimizeLegibility",
	},
});

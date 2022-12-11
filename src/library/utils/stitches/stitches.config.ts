import { createStitches } from "@stitches/react";
import { respxUtil } from "./respxUtil";

export const { styled, globalCss } = createStitches({
	theme: {
		colors: {
			//Accents
			primary: "hsl(211, 100%, 50%)",
			secondary: "hsl(264, 100%, 50%)",
			gradient: `linear-gradient("$primary", "$secondary")`,
			warning: "hsl(48, 100%, 50%)",
			success: "hsl(135, 59%, 49%)",
			danger: "hsl(3, 100%, 59%)",
			//Grays
			gray00: "hsl(0, 0%, 100%)",
			gray01: "hsl(240, 24%, 99%)",
			gray02: "hsl(240, 11%, 95%)",
			gray03: " hsl(240, 6%, 90%)",
			gray04: "hsl(240, 5%, 79%)",
			gray05: "hsl(240, 3%, 69%)",
			gray06: "hsl(240, 2%, 57%)",
			//Blacks
			black00: "hsl(0, 0%, 0%)",
			black01: " hsl(0, 0%, 39%)",
			black02: "hsl(0, 0%, 29%)",
			black03: "hsl(0, 0%, 23%)",
			black04: "hsl(0, 0%, 18%)",
			black05: "hsl(0, 0%, 11%)",
			black06: " hsl(0, 0%, 4%)",
		},
		fontSizes: {
			title1: "calc((1.04rem / 16) * 45)",
			title2: "calc((1.04rem / 16) * 37)",
			title3: "calc((1.04rem / 16) * 35)",
			heading1: "calc((1.04rem / 16) * 29)",
			heading2: "calc((1.04rem / 16) * 27)",
			heading3: "calc((1.04rem / 16) * 22)",
			heading4: "calc((1.04rem / 16) * 20)",
			body: "calc((1.04rem / 16) * 17)",
			caption1: "calc((1.04rem / 16) * 16)",
			caption2: "calc((1.04rem / 16) * 15)",
			caption3: "calc((1.04rem / 16) * 13)",
		},
		fontWeights: { medium: 500, semiBold: 600, bold: 700 },
		shadows: {
			shOne: `0 ${respxUtil(16)} ${respxUtil(40)} ${respxUtil(4)} #c7c7cc`,
			shTwo: `0 ${respxUtil(10)} ${respxUtil(32)} ${respxUtil(2)} #d4d4d8`,
		},
	},
	media: {
		br414: "(min-width: 414px)",
		br640: "(min-width: 640px)",
		br1024: "(min-width: 1024px)",
		br1440: "(min-width: 1440px)",
	},
	utils: {
		flexContainer: (flexValues: any) => ({
			display: "flex",
			flexDirection: flexValues["direction"],
			alignItems: flexValues["align"],
			justifyContent: flexValues["justify"],
		}),
		gridContainer: (gridValues: any) => ({
			display: "grid",
			alignItems: gridValues["align"],
			justifyContent: gridValues["justify"],
		}),
	},
});

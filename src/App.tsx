import React from "react";
import { globalStylesUtil } from "./library/utils/stitches/globalStylesUtil";
import { styled } from "./library/utils/stitches/stitches.config";
import "boxicons/css/boxicons.min.css";
import "./library/scss/arcane.scss";
import { Button } from "./library/Button/Button";

const Main = styled("main", {
	width: "100^",
	height: "72vh",
	backgroundColor: "$gray02",
	flexContainer: {
		direction: "row",
		align: "center",
		justify: "center",
	},
});

function App() {
	globalStylesUtil();

	return (
		<div className="App">
			<Main>
				<Button fontSize="">ArcSass</Button>
			</Main>
		</div>
	);
}

export default App;

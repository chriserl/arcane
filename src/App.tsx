import React from "react";
import { globalStylesUtil } from "./library/utils/stitches/globalStylesUtil";
import { styled } from "./library/utils/stitches/stitches.config";
import "boxicons/css/boxicons.min.css";
import "./app.scss";
import "./library/scss/arcane.scss";
import { NavWidget } from "./library/scss/widgets/NavigationWidget/NavWidget";

const Main = styled("main", {
	width: "100^",
	height: "72vh",
	fontSize: "$title1",
	backgroundColor: "$gray01",
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
			<NavWidget
				brand={{ name: "Sierra", url: "/" }}
				navLinksData={[
					{ name: "Scss", url: "/" },
					{ name: "Els", url: "/" },
					{ name: "Widgets", url: "/" },
				]}
				isolatedLink={{ name: "Github", url: "/" }}
			/>
			<Main>Menace</Main>
		</div>
	);
}

export default App;

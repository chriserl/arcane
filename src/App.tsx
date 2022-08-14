import React from "react";
import { Navigation } from "./library/widgets/Navigation/Navigation";
import { globalStyles } from "./library/utils/stitches/globalStyles";

function App() {
	globalStyles();

	return (
		<div className="App">
			<Navigation />
		</div>
	);
}

export default App;

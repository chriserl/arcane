import React from "react";
import {
	NavigationWidget,
	NavLinksDataShape,
	NavigationDataShape,
} from "./library/widgets/NavigationWidget/NavigationWidget";
import { globalStylesUtil } from "./library/utils/stitches/globalStylesUtil";
import "boxicons/css/boxicons.min.css";

const navLinkObjects: NavLinksDataShape[] = [
	{
		name: "Gallery",
		url: "/gallery",
	},
	{
		name: "Bio",
		url: "/bio",
	},
	{
		name: "Gear",
		url: "/gear",
	},
];

const isolatedLink: NavLinksDataShape = {
	name: "Contact",
	url: "/contact",
};

const NavigationData: NavigationDataShape = {
	brand: "Arcane",
	navLinksData: navLinkObjects,
	isolatedLink: isolatedLink,
};

function App() {
	globalStylesUtil();

	return (
		<div className="App">
			<NavigationWidget {...NavigationData} />
		</div>
	);
}

export default App;

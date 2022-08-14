import React from "react";
import {
	NavigationWidget,
	NavLinkFragmentDataShape,
	NavigationWidgetDataShape,
} from "./library/widgets/NavigationWidget/NavigationWidget";
import { globalStylesUtil } from "./library/utils/stitches/globalStylesUtil";
import "boxicons/css/boxicons.min.css";

const navLinkObjects: NavLinkFragmentDataShape[] = [
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

const isolatedLink: NavLinkFragmentDataShape = {
	name: "Contact",
	url: "/contact",
};

const NavigationData: NavigationWidgetDataShape = {
	brand: { name: "Arcane", url: "/" },
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

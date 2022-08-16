import React from "react";
import {
	NavigationWidget,
	NavLinkFragmentDataShape,
	NavigationWidgetDataShape,
} from "./library/widgets/NavigationWidget/NavigationWidget";
import { globalStylesUtil } from "./library/utils/stitches/globalStylesUtil";
import { styled } from "./library/utils/stitches/stitches.config";
import "boxicons/css/boxicons.min.css";
import { Footer, FooterDataShape } from "./library/widgets/Footer/Footer";

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

const Main = styled("main", {
	width: "100^",
	height: "72vh",
	flexContainer: {
		direction: "row",
		align: "center",
		justify: "center",
	},
});

const SmallBox = styled("div", {
	width: "100px",
	height: "100px",
	borderRadius: "4px",
	background: "$black02",
	boxShadow: "$shOne",
});

const footerData: FooterDataShape = {
	linkSets: [
		{
			title: "Montara",
			links: [
				{ name: "America", url: "/" },
				{ name: "Great Britain", url: "/" },
				{ name: "Canada", url: "/" },
				{ name: "Switzerland", url: "/" },
				{ name: "France", url: "/" },
			],
		},
		{
			title: "Montara",
			links: [
				{ name: "America", url: "/" },
				{ name: "Great Britain", url: "/" },
				{ name: "Canada", url: "/" },
				{ name: "Switzerland", url: "/" },
			],
		},
		{
			title: "Florida",
			links: [
				{ name: "America", url: "/" },
				{ name: "Great Britain", url: "/" },
				{ name: "Canada", url: "/" },
				{ name: "Switzerland", url: "/" },
			],
		},
	],
	copyright: "Montara Studio 2022",
};

function App() {
	globalStylesUtil();

	return (
		<div className="App">
			<NavigationWidget {...NavigationData} />
			<Main>
				<SmallBox />
			</Main>
			<Footer {...footerData} />
		</div>
	);
}

export default App;

import React from "react";
import {
	NavigationWidget,
	NavLinkFragmentDataShape,
	NavigationWidgetDataShape,
} from "./library/widgets/NavigationWidget/NavigationWidget";
import { arcaneBase } from "./library/utils/arcaneBase";
import { styled } from "./library/utils/stitches.config";
import "boxicons/css/boxicons.min.css";
import {
	FooterWidget,
	FooterDataShape,
} from "./library/widgets/FooterWidget/FooterWidget";

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
	theme: "light",
	brand: { name: "Arcane", url: "/" },
	navLinksData: navLinkObjects,
	isolatedLink: isolatedLink,
};

const Main = styled("main", {
	width: "100^",
	height: "72vh",
	backgroundColor: "$gray01",
	flexUtil: {
		direction: "row",
		align: "center",
		justify: "center",
	},
});

const footerData: FooterDataShape = {
	theme: "light",
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
	arcaneBase();

	return (
		<div className="App">
			<NavigationWidget {...NavigationData} />
			<Main></Main>
			<FooterWidget {...footerData} />
		</div>
	);
}

export default App;

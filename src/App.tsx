import React from "react";
import {
	NavigationWidget,
	NavLinkFragmentDataShape,
	NavigationWidgetDataShape,
} from "./library/widgets/NavigationWidget/NavigationWidget";
import { globalStylesUtil } from "./library/utils/stitches/globalStylesUtil";
import { styled } from "./library/utils/stitches/stitches.config";
import "boxicons/css/boxicons.min.css";
import {
	FooterWidget,
	FooterDataShape,
} from "./library/widgets/FooterWidget/FooterWidget";
import { Button, ButtonShape } from "./library/atoms/Button/Button";
import { ArcaneLink } from "./library/atoms/ArcaneLink/ArcaneLink";

const buttonData: ButtonShape = {
	type: "textIcon",
	color: "$primary",
	fontSize: "$body",
	text: "Wien",
	iconPosition: "left",
	icon: {
		name: "bookmark",
		weight: "normal",
	},
};

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
	backgroundColor: "$gray02",
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
				<Button {...buttonData} />
			</Main>
			<FooterWidget {...footerData} />
		</div>
	);
}

export default App;

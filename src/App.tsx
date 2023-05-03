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
import { respx } from "./library/utils/respx";
import { Input, InputShape } from "./library/elements/Forms/Input";
import {
	InputWrapper,
	InputWrapperShape,
} from "./library/elements/Forms/InputWrapper";
import { TextArea } from "./library/elements/Forms/TextArea";

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
	width: "32%",
	height: "72vh",
	backgroundColor: "$gray01",
	flexUtil: {
		direction: "row",
		align: "center",
		justify: "center",
	},
	margin: "0 auto",
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

const InputState: InputShape = {
	type: "text",
	placeholder: {
		text: "Arcane",
		fontSize: "$caption02",
		color: "$black01",
	},
	//borderRadius: respx(0),
	color: "$black05",
	fontSize: "$caption02",
	margin: `${respx(0)} 0 ${respx(10)}`,
	backgroundColor: "$gray03",
	icon: {
		name: "hash",
		weight: "normal",
	},
	stateFunction: () => console.log("Func"),
};

const InputWrapperState: InputWrapperShape = {
	padding: `${respx(5)} ${respx(7)}`,
	borderRadius: respx(7),
	backgroundColor: "$gray03",
};

function App() {
	arcaneBase();

	return (
		<div className="App">
			<NavigationWidget {...NavigationData} />
			<Main>
				<InputWrapper {...InputWrapperState}>
					<Input {...InputState} />
					<Input {...InputState} />
					<Input {...InputState} />
					<TextArea rows={5} {...InputState} />
				</InputWrapper>
			</Main>
			<FooterWidget {...footerData} />
		</div>
	);
}

export default App;

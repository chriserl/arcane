import { FC } from "react";
import { styled } from "../../../utils/stitches/stitches.config";
import { respx } from "../../../utils/stitches/respx";
import { Button, ButtonShape } from "../../atoms/Button/Button";
import { ArcaneLink, ArcaneLinkShape } from "../../atoms/ArcaneLink/ArcaneLink";
import { useState } from "react";

interface toggleDataShape {
	toggleState: boolean;
}

const navLinkObjects = [
	{
		name: "Messages",
		url: "/messages",
	},
	{
		name: "Messages",
		url: "/messages",
	},
	{
		name: "Messages",
		url: "/messages",
	},
	{
		name: "Messages",
		url: "/messages",
	},
];

const isolatedLinkData: ArcaneLinkShape = {
	name: "Messages",
	url: "/messages",
	color: "primary",
	weight: "normal",
	size: "caption2",
};

const Container = styled("nav", {
	width: "auto",
	borderBottom: "1px solid $gray04",
	backdropFilter: "blur(48px)",
	padding: `${respx(12)} ${respx(16)}`,
	flexContainer: {
		direction: "row",
		align: "center",
		justify: "space-between",
	},

	"@br640": {
		padding: `${respx(8)} ${respx(24)}`,
	},
});

const NavLinksList = styled("ul", {
	width: "96%",
	margin: `${respx(24)} auto ${respx(54)}`,
	flexContainer: {
		direction: "column",
		align: "center",
		justify: "center",
	},
	li: {
		width: "100%",
	},
	a: {
		width: "100%",
		padding: `${respx(12)} 0`,
		color: "$black01",
		textTransform: "capitalize",
		borderBottom: "0.8px solid $gray04",

		"&:hover": {
			color: "$black06",
		},
	},

	"@br640": {
		margin: 0,
		marginLeft: respx(70),
		flexContainer: {
			direction: "row",
			align: "center",
			justify: "center",
		},
		li: {
			margin: `0 ${respx(20)}`,
		},
		a: {
			width: "maxContent",
			padding: `${respx(2)}`,
			borderBottom: "none",
		},
	},

	variants: {
		toggle: {
			close: {
				display: "none",
				"@br640": {
					display: "flex",
				},
			},
			open: {
				display: "flex",
			},
		},
	},
});

const BrandLinksContainer = styled("div", {
	width: "100%",
	"@br640": {
		width: "max-content",
		flexContainer: {
			direction: "row",
			align: "center",
			justify: "center",
		},
	},
});

const BrandContainer = styled("div", {
	flexContainer: {
		direction: "row",
		align: "center",
		justify: "space-between",
	},

	div: {
		"&.closeButton": {
			"@br640": {
				display: "none",
			},
		},
	},
});

const IsolatedLink = styled("div", {
	flexContainer: {
		direction: "row",
		align: "center",
		justify: "flex-start",
	},

	variants: {
		media: {
			mobile: {
				display: "flex",
				width: "100%",
				a: { color: "$primary", borderBottom: "none" },
				"@br640": { display: "none" },
			},
			tab: {
				display: "none",
				"@br640": { display: "flex" },
			},
		},
	},
});

const NavLinks: FC<toggleDataShape> = ({ toggleState }) => {
	return (
		<NavLinksList toggle={toggleState ? "close" : "open"}>
			{navLinkObjects
				.filter((linkObject) => linkObject.name !== "donate")
				.map((linkObject) => (
					<li className="linkItem" key={linkObject.name}>
						<ArcaneLink
							{...linkObject}
							color={"black01"}
							size={"caption2"}
							weight={"normal"}
						/>
					</li>
				))}
			<IsolatedLink media="mobile">
				<ArcaneLink {...isolatedLinkData} />
			</IsolatedLink>
		</NavLinksList>
	);
};

export const Navigation: FC = () => {
	const [linksClosed, setlinksClosed] = useState(() => true);
	const togglelinksClosed = () =>
		setlinksClosed(() => (linksClosed ? false : true));
	const closeButtonData: ButtonShape = {
		content: "icon",
		color: "black06",
		icon: {
			name: `${linksClosed ? "dots-vertical-rounded" : "x"}`,
			weight: "normal",
		},
		size: "body",
		clickFunction: togglelinksClosed,
	};

	return (
		<Container>
			<BrandLinksContainer>
				<BrandContainer>
					<ArcaneLink
						name={"Arcane"}
						url={"arcane"}
						color={"black06"}
						size={"body"}
						weight={"medium"}
					/>
					<div className="closeButton">
						<Button {...closeButtonData} />
					</div>
				</BrandContainer>
				<NavLinks toggleState={linksClosed} />
			</BrandLinksContainer>
			<IsolatedLink media="tab">
				<ArcaneLink {...isolatedLinkData} />
			</IsolatedLink>
		</Container>
	);
};

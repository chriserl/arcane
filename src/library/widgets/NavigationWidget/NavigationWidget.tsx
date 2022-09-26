import { FC } from "react";
import { NavigationLinksFragment } from "./NavigationLinksFragment";
import { styled } from "../../utils/stitches/stitches.config";
import { respxUtil } from "../../utils/stitches/respxUtil";
import { Button, ButtonShape } from "../../atoms/Button/Button";
import { ArcaneLink } from "../../atoms/ArcaneLink/ArcaneLink";
import { useState } from "react";

export interface NavLinkFragmentDataShape {
	name: string;
	url: string;
}

export interface NavigationWidgetDataShape {
	brand: NavLinkFragmentDataShape;
	navLinksData: NavLinkFragmentDataShape[];
	isolatedLink: NavLinkFragmentDataShape;
}

const Container = styled("nav", {
	width: "auto",
	position: "relative",
	zIndex: "999",
	backdropFilter: "blur(48px)",
	flexContainer: {
		direction: "row",
		align: "center",
		justify: "space-between",
	},

	"@br640": {
		backgroundColor: "$gray02",
		borderBottom: "1px solid $gray04",
		padding: `${respxUtil(8)} ${respxUtil(48)}`,
	},
});

const BrandLinksContainer = styled("div", {
	width: "100%",
	position: "relative",
	top: "0",
	zIndex: "999",
	backgroundColor: "$gray02",
	borderBottom: "1px solid $gray04",

	"@br640": {
		width: "max-content",
		position: "static",
		borderBottom: "none",
		flexContainer: {
			direction: "row",
			align: "center",
			justify: "center",
		},
	},
});

const BrandContainer = styled("div", {
	padding: `${respxUtil(12)} ${respxUtil(16)}`,

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

	"@br640": {
		padding: "0",
	},
});

export const IsolatedLink = styled("li", {
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
				margin: `${respxUtil(12)} 0`,
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

export const NavigationWidget: FC<NavigationWidgetDataShape> = ({
	brand,
	navLinksData,
	isolatedLink,
}) => {
	const [linksClosed, setlinksClosed] = useState(() => true);
	const togglelinksClosed = () =>
		setlinksClosed(() => (linksClosed ? false : true));
	const closeButtonData: ButtonShape = {
		type: "icon",
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
						name={brand.name}
						url={brand.url}
						color={"black06"}
						size={"body"}
						weight={"medium"}
					/>
					<div className="closeButton">
						<Button {...closeButtonData} />
					</div>
				</BrandContainer>
				<NavigationLinksFragment
					toggleState={linksClosed}
					links={navLinksData}
					isolatedLink={isolatedLink}
				/>
			</BrandLinksContainer>
			<IsolatedLink media="tab">
				<ArcaneLink
					name={isolatedLink.name}
					url={isolatedLink.url}
					color="primary"
					weight="normal"
					size="caption2"
				/>
			</IsolatedLink>
		</Container>
	);
};

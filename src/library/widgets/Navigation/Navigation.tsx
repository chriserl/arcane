import { FC } from "react";
import { NavigationLinks } from "./NavigationLinks";
import { styled } from "../../utils/stitches/stitches.config";
import { respx } from "../../utils/stitches/respx";
import { Button, ButtonShape } from "../../atoms/Button/Button";
import { ArcaneLink } from "../../atoms/ArcaneLink/ArcaneLink";
import { useState } from "react";

export interface NavLinksDataShape {
	name: string;
	url: string;
}

export interface NavigationDataShape {
	brand: string;
	navLinksData: NavLinksDataShape[];
	isolatedLink: NavLinksDataShape;
}

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

export const IsolatedLink = styled("div", {
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

export const Navigation: FC<NavigationDataShape> = ({
	brand,
	navLinksData,
	isolatedLink,
}) => {
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
						name={brand}
						url={"arcane"}
						color={"black06"}
						size={"body"}
						weight={"medium"}
					/>
					<div className="closeButton">
						<Button {...closeButtonData} />
					</div>
				</BrandContainer>
				<NavigationLinks
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

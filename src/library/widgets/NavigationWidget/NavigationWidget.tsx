import React, { FC } from "react";
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
	theme: "light" | "dark";
	brand: NavLinkFragmentDataShape;
	brandIcon?: string;
	navLinksData: NavLinkFragmentDataShape[];
	isolatedLink: NavLinkFragmentDataShape;
}

const Container = styled("nav", {
	width: "auto",
	position: "relative",
	zIndex: "10",
	backdropFilter: "blur(48px)",

	"@br640": {
		padding: `${respxUtil(8)} ${respxUtil(48)}`,
	},

	variants: {
		theme: {
			light: {
				backgroundColor: "$gray02",
				borderBottom: "1px solid $gray04",
			},
			dark: {
				backgroundColor: "$black06",
				borderBottom: "1px solid $black04",
			},
		},
	},
});

const Wrapper = styled("div", {
	width: "100%",
	maxWidth: "1440px",
	margin: "0 auto",
	flexContainer: {
		direction: "row",
		align: "center",
		justify: "space-between",
	},
});

const BrandLinksContainer = styled("div", {
	width: "100%",
	position: "relative",
	top: "0",
	zIndex: "999",

	variants: {
		theme: {
			light: {
				backgroundColor: "$gray02",
			},
			dark: {
				backgroundColor: "$black06",
			},
		},
	},

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

const BrandWrapper = styled("div", {
	flexContainer: {
		direction: "row",
		align: "center",
		justify: "space-between",
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

	variants: {
		theme: {
			light: {
				a: {
					color: "$black06",

					"&:hover": {
						color: "$black02",
					},
				},
			},
			dark: {
				a: {
					color: "$gray00",

					"&:hover": {
						color: "$gray01",
					},
				},
			},
		},
	},
});

const BrandIcon = styled("img", {
	width: respxUtil(20),
	height: respxUtil(20),
	objectFit: "cover",
	marginRight: respxUtil(5),
});

export const IsolatedLink = styled("li", {
	color: "$primary",
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
	theme,
	brand,
	brandIcon,
	navLinksData,
	isolatedLink,
}) => {
	const [linksClosed, setlinksClosed] = useState(() => true);
	const togglelinksClosed = () =>
		setlinksClosed(() => (linksClosed ? false : true));
	const closeButtonData: ButtonShape = {
		type: "icon",
		color: `${theme === "light" ? "$black06" : "$gray00"}`,
		icon: {
			name: `${linksClosed ? "menu" : "x"}`,
			weight: "normal",
		},
		fontSize: "$heading3",
		clickFunction: togglelinksClosed,
	};

	return (
		<Container theme={theme}>
			<Wrapper>
				<BrandLinksContainer theme={theme}>
					<BrandContainer theme={theme}>
						<BrandWrapper>
							{brandIcon && <BrandIcon src={brandIcon} />}
							<ArcaneLink
								name={brand.name}
								url={brand.url}
								color="$gray00"
								fontSize="$body"
								fontWeight="$medium"
							/>
						</BrandWrapper>
						<div className="closeButton">
							<Button {...closeButtonData} />
						</div>
					</BrandContainer>
					<NavigationLinksFragment
						theme={theme}
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
						fontWeight="normal"
						fontSize="caption2"
					/>
				</IsolatedLink>
			</Wrapper>
		</Container>
	);
};

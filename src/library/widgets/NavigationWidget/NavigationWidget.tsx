"use client";
import { FC } from "react";
import { NavigationLinksFragment } from "./NavigationLinksFragment";
import { styled } from "../../utils/stitches.config";
import { respx } from "../../utils/respx";
import { Button, ButtonShape } from "../../elements/Button/Button";
import { Anchor } from "../../elements/Anchor/Anchor";
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
	backgroundColor?: string;
	borderBottom?: string;
}

const Container = styled("nav", {
	width: "auto",
	position: "relative",
	zIndex: "10",
	backdropFilter: "blur(48px)",

	"@br640": {
		padding: `${respx(5)} ${respx(48)}`,
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
	flexUtil: {
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
		flexUtil: {
			direction: "row",
			align: "center",
			justify: "center",
		},
	},
});

const BrandWrapper = styled("div", {
	flexUtil: {
		direction: "row",
		align: "center",
		justify: "space-between",
	},
});

const BrandContainer = styled("div", {
	padding: `${respx(12)} ${respx(16)}`,

	flexUtil: {
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
	width: respx(20),
	height: respx(20),
	objectFit: "cover",
	marginRight: respx(5),
});

export const IsolatedLink = styled("li", {
	color: "$primary",
	flexUtil: {
		direction: "row",
		align: "center",
		justify: "flex-start",
	},

	variants: {
		media: {
			mobile: {
				display: "flex",
				width: "100%",
				margin: `${respx(12)} 0`,
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
	backgroundColor,
	borderBottom,
}) => {
	const [linksClosed, setlinksClosed] = useState(() => true);
	const togglelinksClosed = () =>
		setlinksClosed(() => (linksClosed ? false : true));
	const closeButtonData: ButtonShape = {
		color: `${theme === "light" ? "$black06" : "$gray00"}`,
		icon: {
			name: `${linksClosed ? "menu" : "x"}`,
			weight: "normal",
			color: `${theme === "light" ? "$black06" : "$gray00"}`,
		},
		fontSize: "$heading3",
		clickFunc: togglelinksClosed,
	};

	return (
		<Container theme={theme} css={{ backgroundColor, borderBottom }}>
			<Wrapper>
				<BrandLinksContainer
					theme={theme}
					css={{ backgroundColor, borderBottom }}
				>
					<BrandContainer theme={theme}>
						<BrandWrapper>
							{brandIcon && <BrandIcon src={brandIcon} />}
							<Anchor
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
					<Anchor
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

"use client";
import { FC } from "react";
import { styled } from "../../utils/stitches.config";
import { respx } from "../../utils/respx";
import { Anchor } from "../../elements/Anchor/Anchor";
import { NavLinkFragmentDataShape, IsolatedLink } from "./NavigationWidget";

interface NavigationLinksDataShape {
	theme: "light" | "dark";
	toggleState: boolean;
	links: NavLinkFragmentDataShape[];
	isolatedLink: NavLinkFragmentDataShape;
	backgroundColor?: string;
	borderBottom?: string;
}

const LinksListFragment = styled("ul", {
	width: "100%",
	position: "absolute",
	left: "0",
	zIndex: "999",
	paddingBottom: `${respx(64)}`,
	flexUtil: {
		direction: "column",
		align: "flexStart",
		justify: "center",
	},

	li: {
		width: `calc(100vw - ${respx(56)})`,
		position: "relative",
		left: respx(28),
		right: respx(28),
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
		theme: {
			light: {
				"@br640": {
					borderBottom: "none",
				},
				a: {
					color: "$black01",

					"&:hover": {
						color: "$black06",
					},
				},
			},
			dark: {
				"@br640": {
					borderBottom: "none",
				},
				a: {
					color: "$gray04",

					"&:hover": {
						color: "$gray01",
					},
				},
			},
		},
	},

	"@br640": {
		width: "max-content",
		position: "static",
		margin: 0,
		marginLeft: respx(64),
		padding: "0",
		flexUtil: {
			direction: "row",
			align: "center",
			justify: "center",
		},
		li: {
			width: "max-content",
			margin: `0 ${respx(20)}`,
		},
		a: {
			width: "max-content",
			padding: `${respx(2)}`,
		},
	},
});

const LinksListItem = styled("li", {
	margin: `${respx(10)} 0`,
	"&:first-child": {
		marginTop: `${respx(32)}`,
	},

	a: {
		width: "100%",
		padding: `${respx(4)} 0`,
	},

	variants: {
		theme: {
			light: {
				borderBottom: "0.8px solid $gray04",
				"@br640": {
					borderBottom: "none",
				},
			},
			dark: {
				borderBottom: "0.8px solid $black05",
				"@br640": {
					borderBottom: "none",
				},
			},
		},
	},

	"@br640": {
		margin: `0 ${respx(20)}`,
		"&:first-child": {
			marginTop: "0",
		},
	},
});

export const NavigationLinksFragment: FC<NavigationLinksDataShape> = ({
	theme,
	toggleState,
	links,
	isolatedLink,
	backgroundColor,
	borderBottom,
}) => {
	return (
		<LinksListFragment
			toggle={toggleState ? "close" : "open"}
			theme={theme}
			css={{ backgroundColor, borderBottom }}
		>
			{links.map((linkObject) => (
				<LinksListItem key={linkObject.url} theme={theme}>
					<Anchor
						{...linkObject}
						color={"black01"}
						fontSize={"caption2"}
						fontWeight={"normal"}
					/>
				</LinksListItem>
			))}
			<IsolatedLink media="mobile">
				<Anchor
					name={isolatedLink.name}
					url={isolatedLink.url}
					color="primary"
					fontWeight="normal"
					fontSize="caption2"
				/>
			</IsolatedLink>
		</LinksListFragment>
	);
};

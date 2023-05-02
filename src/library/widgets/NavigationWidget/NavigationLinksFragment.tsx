import { FC } from "react";
import { styled } from "../../utils/stitches/stitches.config";
import { respxUtil } from "../../utils/stitches/respxUtil";
import { ArcaneLink } from "../../atoms/ArcaneLink/ArcaneLink";
import { NavLinkFragmentDataShape, IsolatedLink } from "./NavigationWidget";

interface NavigationLinksDataShape {
	theme: "light" | "dark";
	toggleState: boolean;
	links: NavLinkFragmentDataShape[];
	isolatedLink: NavLinkFragmentDataShape;
}

const LinksListFragment = styled("ul", {
	width: "100%",
	position: "absolute",
	left: "0",
	zIndex: "999",
	background: "$gray02",
	paddingBottom: `${respxUtil(64)}`,
	flexContainer: {
		direction: "column",
		align: "flexStart",
		justify: "center",
	},

	li: {
		width: `calc(100vw - ${respxUtil(56)})`,
		position: "relative",
		left: respxUtil(28),
		right: respxUtil(28),
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
				background: "$gray02",
				borderBottom: "0.8px solid $gray04",
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
				background: "$black06",
				borderBottom: "0.8px solid $black04",
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
		marginLeft: respxUtil(64),
		padding: "0",
		flexContainer: {
			direction: "row",
			align: "center",
			justify: "center",
		},
		li: {
			width: "max-content",
			margin: `0 ${respxUtil(20)}`,
		},
		a: {
			width: "max-content",
			padding: `${respxUtil(2)}`,
		},
	},
});

const LinksListItem = styled("li", {
	margin: `${respxUtil(10)} 0`,
	"&:first-child": {
		marginTop: `${respxUtil(32)}`,
	},

	a: {
		width: "100%",
		padding: `${respxUtil(4)} 0`,
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
		margin: `0 ${respxUtil(20)}`,
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
}) => {
	return (
		<LinksListFragment toggle={toggleState ? "close" : "open"} theme={theme}>
			{links.map((linkObject) => (
				<LinksListItem key={linkObject.url} theme={theme}>
					<ArcaneLink
						{...linkObject}
						color={"black01"}
						fontSize={"caption2"}
						fontWeight={"normal"}
					/>
				</LinksListItem>
			))}
			<IsolatedLink media="mobile">
				<ArcaneLink
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

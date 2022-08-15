import { FC } from "react";
import { styled } from "../../utils/stitches/stitches.config";
import { respxUtil } from "../../utils/stitches/respxUtil";
import { ArcaneLink } from "../../atoms/ArcaneLink/ArcaneLink";
import { NavLinkFragmentDataShape, IsolatedLink } from "./NavigationWidget";

interface NavigationLinksDataShape {
	toggleState: boolean;
	links: NavLinkFragmentDataShape[];
	isolatedLink: NavLinkFragmentDataShape;
}

const LinksListFragment = styled("ul", {
	width: "100%",
	position: "absolute",
	left: "0",
	background: "$gray00",
	paddingBottom: `${respxUtil(64)}`,
	borderBottom: "0.8px solid $gray04",
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

	"@br640": {
		width: "max-content",
		position: "static",
		margin: 0,
		marginLeft: respxUtil(70),
		padding: "0",
		borderBottom: "none",
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

const LinksListItem = styled("li", {
	borderBottom: "0.8px solid $gray04",
	margin: `${respxUtil(10)} 0`,
	"&:first-child": {
		marginTop: `${respxUtil(32)}`,
	},

	a: {
		width: "100%",
		color: "$black01",
		textTransform: "capitalize",
		padding: `${respxUtil(4)} 0`,

		"&:hover": {
			color: "$black06",
		},
	},

	"@br640": {
		margin: `0 ${respxUtil(20)}`,
		borderBottom: "none",
		"&:first-child": {
			marginTop: "0",
		},
	},
});

export const NavigationLinksFragment: FC<NavigationLinksDataShape> = ({
	toggleState,
	links,
	isolatedLink,
}) => {
	return (
		<LinksListFragment toggle={toggleState ? "close" : "open"}>
			{links.map((linkObject) => (
				<LinksListItem key={linkObject.url}>
					<ArcaneLink
						{...linkObject}
						color={"black01"}
						size={"caption2"}
						weight={"normal"}
					/>
				</LinksListItem>
			))}
			<IsolatedLink media="mobile">
				<ArcaneLink
					name={isolatedLink.name}
					url={isolatedLink.url}
					color="primary"
					weight="normal"
					size="caption2"
				/>
			</IsolatedLink>
		</LinksListFragment>
	);
};

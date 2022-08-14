import { FC } from "react";
import { styled } from "../../utils/stitches/stitches.config";
import { respx } from "../../utils/stitches/respx";
import { ArcaneLink } from "../../atoms/ArcaneLink/ArcaneLink";
import { NavLinksDataShape, IsolatedLink } from "./Navigation";

interface NavigationLinksDataShape {
	toggleState: boolean;
	links: NavLinksDataShape[];
	isolatedLink: NavLinksDataShape;
}

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

export const NavigationLinks: FC<NavigationLinksDataShape> = ({
	toggleState,
	links,
	isolatedLink,
}) => {
	return (
		<NavLinksList toggle={toggleState ? "close" : "open"}>
			{links.map((linkObject) => (
				<li className="linkItem" key={linkObject.url}>
					<ArcaneLink
						{...linkObject}
						color={"black01"}
						size={"caption2"}
						weight={"normal"}
					/>
				</li>
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
		</NavLinksList>
	);
};

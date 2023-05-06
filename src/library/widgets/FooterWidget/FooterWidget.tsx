"use client";

import type { FC } from "react";
import { NavLinkFragmentDataShape } from "../NavigationWidget/NavigationWidget";
import { styled } from "../../utils/stitches.config";
import { Anchor } from "../../elements/Anchor/Anchor";
import { respx } from "../../utils/respx";

interface LinkSetDataShape {
	title?: string;
	links: NavLinkFragmentDataShape[];
}

export interface FooterDataShape {
	theme: "light" | "dark";
	linkSets: LinkSetDataShape[];
	copyright: string;
}

const Container = styled("footer", {
	width: "100%",
	position: "relative",
	bottom: "0",
	left: "0",
	marginTop: respx(112),

	variants: {
		theme: {
			light: {
				backgroundColor: "$gray02",
				borderTop: "2px solid $gray03",
			},
			dark: {
				backgroundColor: "$black06",
				borderTop: "2px solid $black05",
			},
		},
	},
});

const FooterWrapper = styled("div", {
	padding: `${respx(48)} ${respx(32)} ${respx(32)}`,
});

const LinkSetsWrapper = styled("div", {
	width: "100%",
	flexUtil: {
		direction: "column",
		align: "baseline",
		justify: "center",
	},

	"@br640": {
		flexUtil: {
			direction: "row",
			align: "baseline",
			justify: "center",
		},
		marginBottom: respx(48),
	},
});

const LinkSetContainer = styled("div", {
	width: "clamp(1fr, max-content, 280px))",
	marginBottom: respx(48),

	"@br640": {
		margin: `0 ${respx(48)}`,
	},
});

const LinkSetTitle = styled("p", {
	fontSize: "$caption3",
	fontWeight: "$medium",
	color: "$black06",
	marginBottom: respx(18),

	variants: {
		theme: {
			light: { color: "$black06" },
			dark: { color: "$gray00" },
		},
	},
});

const LinksContainer = styled("div", {
	gridUtil: {
		align: "start",
		justify: "start",
	},
	justifyItems: "start",
	gridColumn: "1fr",
	gridRowGap: respx(14),
});

const CopyrightContainer = styled("p", {
	textAlign: "center",
	fontSize: "$caption3",
	color: "$gray06",
});

export const FooterWidget: FC<FooterDataShape> = ({
	theme,
	linkSets,
	copyright,
}) => {
	return (
		<Container theme={theme}>
			<FooterWrapper>
				<LinkSetsWrapper>
					{linkSets.map((linkSet) => (
						<LinkSetContainer key={Math.random()}>
							<LinkSetTitle theme={theme}>{linkSet.title}</LinkSetTitle>
							<LinksContainer>
								{linkSet.links.map((link) => (
									<Anchor
										fontWeight=""
										key={link.name}
										fontSize="$caption3"
										color="$black01"
										{...link}
									/>
								))}
							</LinksContainer>
						</LinkSetContainer>
					))}
				</LinkSetsWrapper>
				<CopyrightContainer>&copy; Copyright {copyright}</CopyrightContainer>
			</FooterWrapper>
		</Container>
	);
};

import type { FC } from "react";
import { NavLinkFragmentDataShape } from "../NavigationWidget/NavigationWidget";
import { styled } from "../../utils/stitches/stitches.config";
import { ArcaneLink } from "../../atoms/ArcaneLink/ArcaneLink";
import { respxUtil } from "../../utils/stitches/respxUtil";

interface LinkSetDataShape {
	title?: string;
	links: NavLinkFragmentDataShape[];
}

export interface FooterDataShape {
	linkSets: LinkSetDataShape[];
	copyright: string;
}

const Container = styled("footer", {
	width: "100%",
	position: "relative",
	bottom: "0",
	left: "0",
	backgroundColor: "$gray02",
	marginTop: respxUtil(112),
});

const FooterWrapper = styled("div", {
	padding: `${respxUtil(48)} ${respxUtil(32)} ${respxUtil(32)}`,
});

const LinkSetsWrapper = styled("div", {
	width: "100%",
	flexContainer: {
		direction: "column",
		align: "baseline",
		justify: "center",
	},

	"@br640": {
		flexContainer: {
			direction: "row",
			align: "baseline",
			justify: "center",
		},
		marginBottom: respxUtil(48),
	},
});

const LinkSetContainer = styled("div", {
	width: "clamp(1fr, max-content, 280px))",
	marginBottom: respxUtil(48),

	"@br640": {
		margin: `0 ${respxUtil(48)}`,
	},
});

const LinkSetTitle = styled("p", {
	fontSize: "$caption3",
	fontWeight: "$medium",
	color: "$black06",
	marginBottom: respxUtil(18),
});

const LinksContainer = styled("div", {
	gridContainer: {
		align: "start",
		justify: "start",
	},
	justifyItems: "start",
	gridColumn: "1fr",
	gridRowGap: respxUtil(14),
});

const CopyrightContainer = styled("p", {
	textAlign: "center",
	fontSize: "$caption3",
	color: "$gray06",
});

export const FooterWidget: FC<FooterDataShape> = ({ linkSets, copyright }) => {
	return (
		<Container>
			<FooterWrapper>
				<LinkSetsWrapper>
					{linkSets.map((linkSet) => (
						<LinkSetContainer key={linkSet.title}>
							<LinkSetTitle>{linkSet.title}</LinkSetTitle>
							<LinksContainer>
								{linkSet.links.map((link) => (
									<ArcaneLink
										fontWeight="420"
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

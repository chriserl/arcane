import { FC } from "react";
import { styled } from "../../utils/stitches/stitches.config";

export interface ArcaneLinkShape {
	name: string;
	url: string;
	fontSize: string;
	fontWeight: string;
	color: string;
	icon?: { class: string; position: "left" | "right" };
	newTab?: boolean;
}

const Container = styled("div", {
	width: "max-content",
	flexContainer: {
		direction: "row",
		align: "center",
		justify: "center",
	},
	variants: {
		iconPosition: {
			left: {
				flexDirection: "row-reverse",
			},
			right: {},
		},
	},
});

const Anchor = styled("a", {});

export const ArcaneLink: FC<ArcaneLinkShape> = ({
	name,
	url,
	fontSize,
	fontWeight,
	color,
	icon,
	newTab,
}) => {
	return (
		<Container
			css={{ color, fontSize }}
			iconPosition={icon ? icon.position : "right"}
		>
			{icon && <i className={icon.class} id="linkIcon"></i>}
			<Anchor
				css={{ fontWeight }}
				href={url}
				target={newTab === true ? "_blank" : "_self"}
			>
				{name}
			</Anchor>
		</Container>
	);
};

import { FC } from "react";
import { styled } from "../../utils/stitches/stitches.config";

export interface ArcaneLinkShape {
	name: string;
	url: string;
	fontSize: string;
	fontWeight: string;
	color: string;
	icon?: { class: string; position: "left" | "right" };
}

const Container = styled("div", {
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
}) => {
	return (
		<Container
			css={{ color, fontSize }}
			iconPosition={icon ? icon.position : "right"}
		>
			{icon && <i className={icon.class} id="linkIcon"></i>}
			<Anchor css={{ fontWeight }} href={url}>
				{name}
			</Anchor>
		</Container>
	);
};

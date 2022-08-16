import { FC } from "react";
import { respxUtil } from "../../utils/stitches/respxUtil";
import { styled } from "../../utils/stitches/stitches.config";

export interface ArcaneLinkShape {
	name: string;
	url: string;
	size: "caption3" | "caption2" | "body";
	weight: "normal" | "medium";
	color: "primary" | "black01" | "black06";
	icon?: { class: string; position: "left" | "right" };
}

const Container = styled("div", {
	flexContainer: {
		direction: "row",
		align: "center",
		justify: "center",
	},
	variants: {
		color: {
			primary: {
				color: "$primary",
			},
			black01: {
				color: "$black01",
			},
			black06: {
				color: "$black06",
			},
		},
		size: {
			caption3: {
				fontSize: "$caption3",
			},
			caption2: {
				fontSize: "$caption2",
			},
			body: {
				fontSize: "$body",
			},
		},
		weight: {
			normal: {
				fontWeight: "normal",
			},
			medium: {
				fontWeight: "$medium",
			},
		},
		iconPosition: {
			left: {
				flexDirection: "row-reverse",
			},
			right: {},
		},
	},
});

export const ArcaneLink: FC<ArcaneLinkShape> = ({
	name,
	url,
	size,
	weight,
	color,
	icon,
}) => {
	return (
		<Container
			color={color}
			size={size}
			weight={weight}
			iconPosition={icon ? icon.position : "right"}
		>
			{icon && <i className={icon.class} id="linkIcon"></i>}
			<a href={url}>{name} </a>
		</Container>
	);
};

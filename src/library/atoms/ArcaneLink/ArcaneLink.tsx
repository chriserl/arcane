import { FC } from "react";
import { styled } from "../../stitches.config";

export interface ArcaneLinkShape {
	name: string;
	url: string;
	size: "caption2" | "body";
	weight: "normal" | "medium";
	color: "primary" | "black01" | "black06";
}

const Container = styled("div", {
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
	},
});

export const ArcaneLink: FC<ArcaneLinkShape> = ({
	name,
	url,
	size,
	weight,
	color,
}) => {
	return (
		<Container color={color} size={size} weight={weight}>
			<a href={url}>{name}</a>
		</Container>
	);
};

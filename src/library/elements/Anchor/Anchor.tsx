import { FC } from "react";
import { styled } from "../../utils/stitches/stitches.config";

export interface AnchorShape {
	name: string;
	url: string;
	fontSize: string;
	fontWeight: string;
	color: string;
	icon?: {
		name: string;
		fontSize: string;
		weight: "normal" | "solid";
		position: "left" | "right";
	};
	newTab?: boolean;
}

const Container = styled("a", {
	width: "max-content",
	flexContainer: {
		direction: "row",
		align: "center",
		justify: "flex-end",
	},
	variants: {
		iconPosition: {
			right: {
				flexDirection: "row-reverse",
			},
			left: {},
		},
	},
});

const AnchorText = styled("p", {});
const Icon = styled("i", {});

export const Anchor: FC<AnchorShape> = ({
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
			href={url}
			target={newTab === true ? "_blank" : "_self"}
		>
			{icon && (
				<Icon
					css={{ fontSize: icon.fontSize }}
					className={`bx ${icon.weight === "solid" ? "bxs" : "bx"}-${
						icon.name
					}`}
					id="linkIcon"
				></Icon>
			)}
			<AnchorText css={{ fontWeight }}>{name}</AnchorText>
		</Container>
	);
};

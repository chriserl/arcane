"use client";

import type { FC } from "react";
import { styled } from "../../utils/stitches.config";

interface ButtonShape {
	text?: string;
	icon?: {
		name: string;
		weight: "normal" | "solid";
		color: string;
	};
	background?: string;
	color?: string;
	padding?: string;
	margin?: string;
	borderRadius?: string;
	border?: string;
	fontSize?: string;
	fontWeight?: string;
	clickFunc?: Function;
}

const Container = styled("button", {
	width: "max-content",
	flexUtil: {
		direction: "row",
		align: "center",
		justify: "start",
	},
	margin: "0 auto",
	cursor: "pointer",
	border: "none",
});

const IconWrapper = styled("i", {});

const Button: FC<ButtonShape> = ({
	text,
	icon,
	background,
	color,
	padding,
	margin,
	borderRadius,
	border,
	fontSize,
	fontWeight,
	clickFunc,
}) => {
	return (
		<Container
			css={{
				backgroundColor: background,
				color,
				padding,
				margin,
				borderRadius,
				fontSize,
				fontWeight,
				border,
			}}
			onClick={() => clickFunc && clickFunc()}
		>
			{text}
			{icon && (
				<IconWrapper
					className={`bx bx${icon.weight === "solid" ? "s" : ""}-${icon.name}`}
					css={{ color: icon.color, fontSize }}
				></IconWrapper>
			)}
		</Container>
	);
};

export { Button };
export type { ButtonShape };

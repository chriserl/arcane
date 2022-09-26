import { FC } from "react";
import { styled } from "../../utils/stitches/stitches.config";

export interface ButtonShape {
	type: "text" | "icon" | "textIcon";
	color: "primary" | "black01" | "black06";
	size: "caption2" | "body";
	icon?: {
		name: string;
		weight: "normal" | "solid";
	};
	text?: string;
	clickFunction?: VoidFunction;
}

const Container = styled("button", {
	border: "none",
	flexContainer: {
		direction: "row",
		align: "center",
		justify: "center",
	},
	outline: "none",
	background: "transparent",
	lineHeight: "1",
	cursor: "pointer",
	variants: {
		type: {
			text: {
				i: {
					display: "none",
				},
			},
			icon: {
				p: {
					display: "none",
				},
			},
			textIcon: {},
		},

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
	},
});

export const Button: FC<ButtonShape> = ({
	type,
	color,
	size,
	icon,
	text,
	clickFunction,
}) => {
	return (
		<Container
			type={type}
			color={color}
			size={size}
			onClick={() => clickFunction && clickFunction()}
		>
			{icon && (
				<i
					className={`bx ${icon.weight === "solid" ? "bxs" : "bx"}-${
						icon.name
					}`}
				></i>
			)}
			<p className="text">{text && text}</p>
		</Container>
	);
};

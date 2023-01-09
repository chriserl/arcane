import { FC, MouseEvent } from "react";
import { styled } from "../../utils/stitches/stitches.config";

export interface ButtonShape {
	type: "text" | "icon" | "textIcon";
	text?: string;
	color: string;
	fontSize: string;
	iconPosition?: "left" | "right";
	icon?: {
		name: string;
		weight: "normal" | "solid";
	};
	clickFunction?: Function;
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
			textIcon: {
				"i +	p": {
					display: "inline",
				},
			},
		},
		iconPosition: {
			left: {
				flexDirection: "row",
			},
			right: {
				flexDirection: "row-reverse",
			},
		},
	},
});

export const Button: FC<ButtonShape> = ({
	type,
	color,
	fontSize,
	icon,
	iconPosition,
	text,
	clickFunction,
}) => {
	return (
		<Container
			type={type}
			iconPosition={iconPosition}
			css={{ color, fontSize }}
			onClick={(clickEvent: MouseEvent) =>
				clickFunction && clickFunction(clickEvent)
			}
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

import type { FC } from "react";
import { styled } from "../../utils/stitches.config";
import { respx } from "../../utils/respx";

export interface InputShape {
	type: "text" | "password" | "email";
	icon?: {
		name: string;
		weight: "normal" | "solid";
	};
	placeholder: {
		text: string;
		fontSize: string;
		color: string;
	};
	color: string;
	fontSize: string;
	backgroundColor: string;
	borderRadius?: string;
	margin?: string;
	stateFunction: Function;
}

const Container = styled("div", {
	width: "stretch",
	maxWidth: "100%",
	fontSize: "$caption2",
	padding: `${respx(8)} ${respx(10)}`,
	flexUtil: {
		direction: "row",
		align: "center",
		justify: "start",
	},
	i: {
		marginRight: respx(10),
	},
	"&:focus-within": {
		i: {
			color: "$primary",
		},
	},
});

const InputEl = styled("input", {
	width: "100%",
	backgroundColor: "transparent",
	fontWeight: "normal",
	"&::placeholder": {
		fontWeight: "normal",
	},
});

const Icon = styled("i", {});

export const Input: FC<InputShape> = ({
	type,
	icon,
	color,
	placeholder,
	fontSize,
	backgroundColor,
	borderRadius,
	margin,
	stateFunction,
}) => {
	return (
		<Container css={{ borderRadius, margin, backgroundColor }}>
			{icon && (
				<Icon
					css={{ color: placeholder.color, fontSize: placeholder.fontSize }}
					className={`bx ${icon.weight === "solid" ? "bxs" : "bx"}-${
						icon.name
					}`}
				></Icon>
			)}
			<InputEl
				css={{
					color,
					fontSize,
					"&::placeholder": {
						fontSize: placeholder.fontSize,
						color: placeholder.color,
					},
				}}
				placeholder={placeholder.text}
				type={type}
				onChange={(e) => stateFunction(e.target.value)}
			/>
			;
		</Container>
	);
};

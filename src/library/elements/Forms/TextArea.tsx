import type { FC } from "react";
import { styled } from "../../utils/stitches.config";
import { respx } from "../../utils/respx";

export interface TextAreaShape {
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
	rows: number;
	stateFunction: Function;
}

const Container = styled("div", {
	width: "stretch",
	maxWidth: "100%",
	fontSize: "$caption2",
	padding: `${respx(12)} ${respx(10)} ${respx(25)}`,
	flexUtil: {
		direction: "row",
		align: "flex-start",
		justify: "start",
	},
	"&:focus-within": {
		i: {
			color: "$primary",
		},
	},
});

const TextAreaEl = styled("textarea", {
	width: "100%",
	backgroundColor: "transparent",
	fontWeight: "normal",
	"&::placeholder": {
		fontWeight: "normal",
	},
	overflowX: "scroll",
	"ms-overflow-style": "none",
	scrollbarWidth: "none",
	"&::-webkit-scrollbar": {
		display: "none",
	},
});

const Icon = styled("i", { marginRight: respx(10), marginTop: respx(2) });

export const TextArea: FC<TextAreaShape> = ({
	icon,
	color,
	placeholder,
	fontSize,
	backgroundColor,
	borderRadius,
	margin,
	rows,
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
			<TextAreaEl
				css={{
					color,
					fontSize,
					"&::placeholder": {
						fontSize: placeholder.fontSize,
						color: placeholder.color,
					},
				}}
				placeholder={placeholder.text}
				rows={rows}
				onChange={(e) => stateFunction(e.target.value)}
			/>
			;
		</Container>
	);
};

import type { FC } from "react";
import { styled } from "../../utils/stitches.config";

export interface InputWrapperShape {
	padding?: string;
	borderRadius?: string;
	backgroundColor: string;
	children?: React.ReactNode;
}

const Container = styled("div", {
	width: "100%",
	flexUtil: {
		direction: "column",
		align: "center",
		justify: "center",
	},
});

export const InputWrapper: FC<InputWrapperShape> = ({
	children,
	padding,
	borderRadius,
	backgroundColor,
}) => {
	return (
		<Container css={{ padding, borderRadius, backgroundColor }}>
			{children}
		</Container>
	);
};

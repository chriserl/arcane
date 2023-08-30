import { FC, MouseEvent, ReactNode } from "react";

export interface ButtonShape {
	color?: string;
	fontSize?: string;
	padding?: string;
	margin?: string;
	borderRadius?: string;
	children?: ReactNode;
	clickFunction?: Function;
}

export const Button: FC<ButtonShape> = ({
	color,
	fontSize,
	padding,
	margin,
	borderRadius,
	children,
	clickFunction,
}) => {
	return (
		<button
			style={{ color, fontSize, padding, margin, borderRadius }}
			onClick={(clickEvent: MouseEvent) =>
				clickFunction && clickFunction(clickEvent)
			}
		>
			{children}
		</button>
	);
};

import { FC, MouseEvent, ReactNode } from "react";
import buttonscss from "./button.module.scss";

export interface ButtonShape {
	size: "small";
	children?: ReactNode;
	clickFunction?: Function;
}

export const Button: FC<ButtonShape> = ({ size, children, clickFunction }) => {
	return (
		<button
			className={buttonscss[size]}
			onClick={(clickEvent: MouseEvent) =>
				clickFunction && clickFunction(clickEvent)
			}
		>
			{children}
		</button>
	);
};

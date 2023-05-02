import { FC } from "react";
export interface ButtonShape {
    content: "icon";
    color: "primary" | "black01" | "black06";
    size: "caption2" | "body";
    icon?: {
        name: string;
        weight: "normal" | "solid";
    };
    text?: string;
    clickFunction?: VoidFunction;
}
export declare const Button: FC<ButtonShape>;

import { FC } from "react";
export interface ArcaneLinkShape {
    name: string;
    url: string;
    size: "caption2" | "body";
    weight: "normal" | "medium";
    color: "primary" | "black01" | "black06";
}
export declare const ArcaneLink: FC<ArcaneLinkShape>;

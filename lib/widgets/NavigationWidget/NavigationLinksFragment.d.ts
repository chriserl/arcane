import { FC } from "react";
import { NavLinkFragmentDataShape } from "./NavigationWidget";
interface NavigationLinksDataShape {
    toggleState: boolean;
    links: NavLinkFragmentDataShape[];
    isolatedLink: NavLinkFragmentDataShape;
}
export declare const NavigationLinksFragment: FC<NavigationLinksDataShape>;
export {};

import { FC } from "react";
export interface NavLinkFragmentDataShape {
    name: string;
    url: string;
}
export interface NavigationWidgetDataShape {
    brand: NavLinkFragmentDataShape;
    navLinksData: NavLinkFragmentDataShape[];
    isolatedLink: NavLinkFragmentDataShape;
}
export declare const IsolatedLink: import("@stitches/react/types/styled-component").StyledComponent<"li", {
    media?: "tab" | "mobile" | undefined;
}, {
    br414: "(min-width: 414px)";
    br640: "(min-width: 640px)";
    br1024: "(min-width: 1024px)";
    br1440: "(min-width: 1440px)";
}, import("@stitches/react/types/css-util").CSS<{
    br414: "(min-width: 414px)";
    br640: "(min-width: 640px)";
    br1024: "(min-width: 1024px)";
    br1440: "(min-width: 1440px)";
}, {
    colors: {
        primary: string;
        secondary: string;
        gradient: string;
        warning: string;
        success: string;
        danger: string;
        gray00: string;
        gray01: string;
        gray02: string;
        gray03: string;
        gray04: string;
        gray05: string;
        gray06: string;
        black00: string;
        black01: string;
        black02: string;
        black03: string;
        black04: string;
        black05: string;
        black06: string;
    };
    fontSizes: {
        title1: string;
        title2: string;
        title3: string;
        heading1: string;
        heading2: string;
        heading3: string;
        heading4: string;
        body: string;
        caption1: string;
        caption2: string;
        caption3: string;
    };
    fontWeights: {
        medium: number;
        semiBold: number;
        bold: number;
    };
    shadows: {
        shOne: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    flexContainer: (flexValues: any) => {
        display: string;
        flexDirection: any;
        alignItems: any;
        justifyContent: any;
    };
    gridContainer: (gridValues: any) => {
        display: string;
        alignItems: any;
        justifyContent: any;
    };
}>>;
export declare const NavigationWidget: FC<NavigationWidgetDataShape>;

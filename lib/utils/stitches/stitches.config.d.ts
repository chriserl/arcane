/// <reference types="react" />
export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
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
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
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
}>>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{
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
    }>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{
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
}>; })[]) => () => string;

import * as _stitches_react_types_styled_component from '@stitches/react/types/styled-component';
import * as _stitches_react_types_stitches from '@stitches/react/types/stitches';
import * as _stitches_react_types_css_util from '@stitches/react/types/css-util';
import * as _stitches_react_types_config from '@stitches/react/types/config';
import * as react from 'react';
import { FC, PropsWithChildren } from 'react';
import * as _stitches_react_types_util from '@stitches/react/types/util';

declare const styled: <Type extends _stitches_react_types_util.Function | keyof JSX.IntrinsicElements | react.ComponentType<any>, Composers extends (string | _stitches_react_types_util.Function | react.ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = _stitches_react_types_css_util.CSS<{
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
}, _stitches_react_types_config.DefaultThemeMap, {
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
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | _stitches_react_types_util.Function | react.ComponentType<any> ? Composers[K] : _stitches_react_types_stitches.RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : _stitches_react_types_util.WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : _stitches_react_types_util.WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => _stitches_react_types_styled_component.StyledComponent<Type, _stitches_react_types_styled_component.StyledComponentProps<Composers>, {
    br414: "(min-width: 414px)";
    br640: "(min-width: 640px)";
    br1024: "(min-width: 1024px)";
    br1440: "(min-width: 1440px)";
}, _stitches_react_types_css_util.CSS<{
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
}, _stitches_react_types_config.DefaultThemeMap, {
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

declare const globalStylesUtil: () => string;

declare const respxUtil: (pxFactor: number) => string;

interface ArcaneLinkShape {
    name: string;
    url: string;
    size: "caption2" | "body";
    weight: "normal" | "medium";
    color: "primary" | "black01" | "black06";
}
declare const ArcaneLink: FC<ArcaneLinkShape>;

interface ButtonShape {
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
declare const Button: FC<ButtonShape>;

interface NavLinkFragmentDataShape {
    name: string;
    url: string;
}
interface NavigationWidgetDataShape {
    brand: NavLinkFragmentDataShape;
    navLinksData: NavLinkFragmentDataShape[];
    isolatedLink: NavLinkFragmentDataShape;
}
declare const NavigationWidget: FC<NavigationWidgetDataShape>;

declare const CarouselContainer: FC<PropsWithChildren>;

export { ArcaneLink, Button, CarouselContainer, NavLinkFragmentDataShape, NavigationWidget, NavigationWidgetDataShape, globalStylesUtil, respxUtil, styled };

import { createStitches } from '@stitches/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

var respxUtil = function (pxFactor) {
    return "calc((1.04rem / 16) * ".concat(pxFactor, ")");
};

var _a;
var styled = (_a = createStitches({
    theme: {
        colors: {
            //Accents
            primary: "hsl(211, 100%, 50%)",
            secondary: "hsl(264, 100%, 50%)",
            gradient: "linear-gradient(\"$primary\", \"$secondary\")",
            warning: "hsl(48, 100%, 50%)",
            success: "hsl(135, 59%, 49%)",
            danger: "hsl(3, 100%, 59%)",
            //Grays
            gray00: "hsl(0, 0%, 100%)",
            gray01: "hsl(240, 24%, 99%)",
            gray02: "hsl(240, 11%, 95%)",
            gray03: " hsl(240, 6%, 90%)",
            gray04: "hsl(240, 5%, 79%)",
            gray05: "hsl(240, 3%, 69%)",
            gray06: "hsl(240, 2%, 57%)",
            //Blacks
            black00: "hsl(0, 0%, 0%)",
            black01: " hsl(0, 0%, 39%)",
            black02: "hsl(0, 0%, 29%)",
            black03: "hsl(0, 0%, 23%)",
            black04: "hsl(0, 0%, 18%)",
            black05: "hsl(0, 0%, 11%)",
            black06: " hsl(0, 0%, 4%)",
        },
        fontSizes: {
            title1: "calc((1.04rem / 16) * 45)",
            title2: "calc((1.04rem / 16) * 37)",
            title3: "calc((1.04rem / 16) * 35)",
            heading1: "calc((1.04rem / 16) * 29)",
            heading2: "calc((1.04rem / 16) * 27)",
            heading3: "calc((1.04rem / 16) * 22)",
            heading4: "calc((1.04rem / 16) * 20)",
            body: "calc((1.04rem / 16) * 17)",
            caption1: "calc((1.04rem / 16) * 16)",
            caption2: "calc((1.04rem / 16) * 15)",
            caption3: "calc((1.04rem / 16) * 13)",
        },
        fontWeights: { medium: 500, semiBold: 600, bold: 700 },
        shadows: {
            shOne: "0 ".concat(respxUtil(16), " ").concat(respxUtil(40), " ").concat(respxUtil(4), " #c7c7cc"),
        },
    },
    media: {
        br414: "(min-width: 414px)",
        br640: "(min-width: 640px)",
        br1024: "(min-width: 1024px)",
        br1440: "(min-width: 1440px)",
    },
    utils: {
        flexContainer: function (flexValues) { return ({
            display: "flex",
            flexDirection: flexValues["direction"],
            alignItems: flexValues["align"],
            justifyContent: flexValues["justify"],
        }); },
        gridContainer: function (gridValues) { return ({
            display: "grid",
            alignItems: gridValues["align"],
            justifyContent: gridValues["justify"],
        }); },
    },
}), _a.styled), globalCss = _a.globalCss;

var globalStylesUtil = globalCss({
    "@import": "../css/modernreset.css",
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "borderBox",
        fontWeight: "normal",
    },
    ":root": {
        fontSize: "calc(14px + 0.32vh)",
        "@media screen and (min-width: 600px)": {
            fontSize: "calc(14px + 0.098vw)",
        },
    },
    li: {
        listStyleType: "none",
    },
    a: {
        display: "flex",
        textDecoration: "none",
        color: "inherit",
    },
    "&:focus:not(:focus-visible)": {
        outline: 0,
    },
    "@font-face": {
        fontFamily: "Inter",
        src: 'url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap")',
    },
    body: {
        fontFamily: "Inter, Helvetica, -apple-system,BlinkMacSystemFont, Segoe UI, Roboto Oxygen, Ubuntu, Cantarell Open Sans, Helvetica Neue,sans-serif",
        letterSpacing: "-0.3px",
        fontSynthesis: "none",
        textRendering: "optimizeLegibility",
    },
});

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Container$3 = styled("div", {
    variants: {
        color: {
            primary: {
                color: "$primary",
            },
            black01: {
                color: "$black01",
            },
            black06: {
                color: "$black06",
            },
        },
        size: {
            caption2: {
                fontSize: "$caption2",
            },
            body: {
                fontSize: "$body",
            },
        },
        weight: {
            normal: {
                fontWeight: "normal",
            },
            medium: {
                fontWeight: "$medium",
            },
        },
    },
});
var ArcaneLink = function (_a) {
    var name = _a.name, url = _a.url, size = _a.size, weight = _a.weight, color = _a.color;
    return (jsx(Container$3, __assign({ color: color, size: size, weight: weight }, { children: jsx("a", __assign({ href: url }, { children: name })) })));
};

var Container$2 = styled("button", {
    border: "none",
    flexContainer: {
        direction: "row",
        align: "center",
        justify: "center",
    },
    outline: "none",
    background: "transparent",
    lineHeight: "1",
    cursor: "pointer",
    variants: {
        content: {
            icon: {
                "&.text": {
                    display: "none",
                },
            },
        },
        color: {
            primary: {
                color: "$primary",
            },
            black01: {
                color: "$black01",
            },
            black06: {
                color: "$black06",
            },
        },
        size: {
            caption2: {
                fontSize: "$caption2",
            },
            body: {
                fontSize: "$body",
            },
        },
    },
});
var Button = function (_a) {
    var content = _a.content, color = _a.color, size = _a.size, icon = _a.icon, text = _a.text, clickFunction = _a.clickFunction;
    return (jsxs(Container$2, __assign({ content: content, color: color, size: size, onClick: function () { return clickFunction && clickFunction(); } }, { children: [icon && (jsx("i", { className: "bx ".concat(icon.weight === "solid" ? "bxs" : "bx", "-").concat(icon.name) })), jsx("p", __assign({ className: "text" }, { children: text && text }))] })));
};

var LinksListFragment = styled("ul", {
    width: "100%",
    position: "absolute",
    left: "0",
    background: "$gray02",
    paddingBottom: "".concat(respxUtil(64)),
    borderBottom: "0.8px solid $gray04",
    flexContainer: {
        direction: "column",
        align: "flexStart",
        justify: "center",
    },
    li: {
        width: "calc(100vw - ".concat(respxUtil(56), ")"),
        position: "relative",
        left: respxUtil(28),
        right: respxUtil(28),
    },
    "@br640": {
        width: "max-content",
        position: "static",
        margin: 0,
        marginLeft: respxUtil(70),
        padding: "0",
        borderBottom: "none",
        flexContainer: {
            direction: "row",
            align: "center",
            justify: "center",
        },
        li: {
            width: "max-content",
            margin: "0 ".concat(respxUtil(20)),
        },
        a: {
            width: "max-content",
            padding: "".concat(respxUtil(2)),
            borderBottom: "none",
        },
    },
    variants: {
        toggle: {
            close: {
                display: "none",
                "@br640": {
                    display: "flex",
                },
            },
            open: {
                display: "flex",
            },
        },
    },
});
var LinksListItem = styled("li", {
    borderBottom: "0.8px solid $gray04",
    margin: "".concat(respxUtil(10), " 0"),
    "&:first-child": {
        marginTop: "".concat(respxUtil(32)),
    },
    a: {
        width: "100%",
        color: "$black01",
        textTransform: "capitalize",
        padding: "".concat(respxUtil(4), " 0"),
        "&:hover": {
            color: "$black06",
        },
    },
    "@br640": {
        margin: "0 ".concat(respxUtil(20)),
        borderBottom: "none",
        "&:first-child": {
            marginTop: "0",
        },
    },
});
var NavigationLinksFragment = function (_a) {
    var toggleState = _a.toggleState, links = _a.links, isolatedLink = _a.isolatedLink;
    return (jsxs(LinksListFragment, __assign({ toggle: toggleState ? "close" : "open" }, { children: [links.map(function (linkObject) { return (jsx(LinksListItem, { children: jsx(ArcaneLink, __assign({}, linkObject, { color: "black01", size: "caption2", weight: "normal" })) }, linkObject.url)); }), jsx(IsolatedLink, __assign({ media: "mobile" }, { children: jsx(ArcaneLink, { name: isolatedLink.name, url: isolatedLink.url, color: "primary", weight: "normal", size: "caption2" }) }))] })));
};

var Container$1 = styled("nav", {
    width: "auto",
    backdropFilter: "blur(48px)",
    flexContainer: {
        direction: "row",
        align: "center",
        justify: "space-between",
    },
    "@br640": {
        backgroundColor: "$gray02",
        borderBottom: "1px solid $gray04",
        padding: "".concat(respxUtil(8), " ").concat(respxUtil(48)),
    },
});
var BrandLinksContainer = styled("div", {
    width: "100%",
    position: "relative",
    top: "0",
    backgroundColor: "$gray02",
    borderBottom: "1px solid $gray04",
    "@br640": {
        width: "max-content",
        position: "static",
        borderBottom: "none",
        flexContainer: {
            direction: "row",
            align: "center",
            justify: "center",
        },
    },
});
var BrandContainer = styled("div", {
    padding: "".concat(respxUtil(12), " ").concat(respxUtil(16)),
    flexContainer: {
        direction: "row",
        align: "center",
        justify: "space-between",
    },
    div: {
        "&.closeButton": {
            "@br640": {
                display: "none",
            },
        },
    },
    "@br640": {
        padding: "0",
    },
});
var IsolatedLink = styled("li", {
    flexContainer: {
        direction: "row",
        align: "center",
        justify: "flex-start",
    },
    variants: {
        media: {
            mobile: {
                display: "flex",
                width: "100%",
                margin: "".concat(respxUtil(12), " 0"),
                a: { color: "$primary", borderBottom: "none" },
                "@br640": { display: "none" },
            },
            tab: {
                display: "none",
                "@br640": { display: "flex" },
            },
        },
    },
});
var NavigationWidget = function (_a) {
    var brand = _a.brand, navLinksData = _a.navLinksData, isolatedLink = _a.isolatedLink;
    var _b = useState(function () { return true; }), linksClosed = _b[0], setlinksClosed = _b[1];
    var togglelinksClosed = function () {
        return setlinksClosed(function () { return (linksClosed ? false : true); });
    };
    var closeButtonData = {
        content: "icon",
        color: "black06",
        icon: {
            name: "".concat(linksClosed ? "dots-vertical-rounded" : "x"),
            weight: "normal",
        },
        size: "body",
        clickFunction: togglelinksClosed,
    };
    return (jsxs(Container$1, { children: [jsxs(BrandLinksContainer, { children: [jsxs(BrandContainer, { children: [jsx(ArcaneLink, { name: brand.name, url: brand.url, color: "black06", size: "body", weight: "medium" }), jsx("div", __assign({ className: "closeButton" }, { children: jsx(Button, __assign({}, closeButtonData)) }))] }), jsx(NavigationLinksFragment, { toggleState: linksClosed, links: navLinksData, isolatedLink: isolatedLink })] }), jsx(IsolatedLink, __assign({ media: "tab" }, { children: jsx(ArcaneLink, { name: isolatedLink.name, url: isolatedLink.url, color: "primary", weight: "normal", size: "caption2" }) }))] }));
};

var Container = styled("div", {
    width: "100%",
    overflowX: "scroll",
    "ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
        display: "none",
    },
});
var CarouselContainer = function (_a) {
    var children = _a.children;
    return jsx(Container, __assign({ className: "carouselContainer" }, { children: children }));
};
CarouselContainer.toString = function () { return ".carouselContainer"; };

export { ArcaneLink, Button, CarouselContainer, NavigationWidget, globalStylesUtil, respxUtil, styled };
//# sourceMappingURL=index.js.map

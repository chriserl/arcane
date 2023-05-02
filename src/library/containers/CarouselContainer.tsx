import type { FC, PropsWithChildren } from "react";
import { styled } from "../utils/stitches/stitches.config";

const Container = styled("div", {
	width: "100%",
	overflowX: "scroll",
	"ms-overflow-style": "none",
	scrollbarWidth: "none",
	"&::-webkit-scrollbar": {
		display: "none",
	},
});

export const CarouselContainer: FC<PropsWithChildren> = ({ children }) => {
	return <Container className="carouselContainer">{children}</Container>;
};

CarouselContainer.toString = () => ".carouselContainer";

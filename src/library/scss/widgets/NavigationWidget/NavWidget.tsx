import { FC } from "react";
import { useState } from "react";
import navscss from "./nav.module.scss";

export interface NavLinkShape {
	name: string;
	url: string;
}

export interface NavigationWidgetDataShape {
	brand: NavLinkShape;
	navLinksData?: NavLinkShape[];
	isolatedLink?: NavLinkShape;
}

export const NavWidget: FC<NavigationWidgetDataShape> = ({
	brand,
	navLinksData,
	isolatedLink,
}) => {
	const [linksClosed, setlinksClosed] = useState(() => true);
	const togglelinksClosed = () =>
		setlinksClosed(() => (linksClosed ? false : true));

	return (
		<nav className={navscss.navscss}>
			<div className={navscss.brandLinksWrapper}>
				<div className={navscss.brandWrapper}>
					<a href={brand.url} className={navscss.brand}>
						{brand.name}
					</a>
					<button
						className={navscss.closeBtn}
						onClick={() => togglelinksClosed()}
					>
						<span className={`bx bx-${linksClosed ? "menu" : "x"}`}></span>
					</button>
				</div>
				<ul className={linksClosed ? navscss.lgLinksList : navscss.smLinksList}>
					{navLinksData?.map((navLink) => (
						<li className={navscss.linkItem}>
							<a href={navLink.url} className={navscss.link}>
								{navLink.name}
							</a>
						</li>
					))}
					<li className={navscss.smIsoLink}>
						<a href={isolatedLink?.url} className={navscss.link}>
							{isolatedLink?.name}
						</a>
					</li>
				</ul>
			</div>
			<div className={navscss.lgIsoLink}>
				<a href={isolatedLink?.url}>{isolatedLink?.name}</a>
			</div>
		</nav>
	);
};

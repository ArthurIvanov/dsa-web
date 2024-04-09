import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container flex-justify-between flex-align-center">
				<div className="display-flex flex-align-center gap-16">
					<Link href="/">
						<Image
							alt="logo"
							src="/dsa-logo.svg"
							width={100}
							height={56}
						/>
					</Link>
					<span>Design System Architect</span>
				</div>
				<ul className="display-flex flex-align-center gap-64">
					<ul className="display-flex gap-32">
						{NAV_LINKS.map((link) => (
							<Link
								className="text-link"
								href={link.href}
								key={link.key}
							>
								{link.label}
							</Link>
						))}
					</ul>
					<a className="button-primary">Будем на связи</a>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

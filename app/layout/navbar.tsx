import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import "./navbar.css";
import { NavLink } from "../components/link/link";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container flex-justify-between flex-align-center">
				<Link
					href="/"
					className="display-flex flex-align-center gap-16"
				>
					<Image
						alt="logo"
						src="/dsa-logo.svg"
						width={100}
						height={56}
					/>
					<span>Design System Architect</span>
				</Link>

				<ul className="display-flex flex-align-center gap-64">
					<ul className="display-flex gap-32">
						{NAV_LINKS.map((link) => (
							<NavLink
								target="_blank"
								rel="noopener noreferrer"
								href={link.href}
								key={link.key}
							>
								{link.label}
							</NavLink>
						))}
					</ul>
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="button-primary"
						href="https://t.me/arturdsgn"
					>
						Записаться на поток
					</a>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

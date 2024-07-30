"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { NavLink } from "../components/link/link";
import styled from "styled-components";

const StyledNavBar = styled.nav`
	display: flex;
	height: 120px;
	padding: 0 64px;
	background-color: var(--main-invert-default);
	box-shadow: 0px 8px 32px rgba(34, 49, 69, 0.04);
	z-index: 120;
	position: sticky;

	.navbar-content {
		max-width: 1622px;
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	span {
		color: var(--tertiary-default);
		font-size: 14px;
		line-height: 16px;
	}

	@media screen and (max-width: 1024px) {
		padding: 0 16px;
	}
`;

const Navbar = () => {
	return (
		<StyledNavBar>
			<div className="navbar-content">
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
		</StyledNavBar>
	);
};

export default Navbar;

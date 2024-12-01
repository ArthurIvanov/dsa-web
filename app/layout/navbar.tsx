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
	background-color: var(--section-bg);
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

	.hamburger-lines {
		display: block;
		height: 26px;
		width: 32px;
		position: absolute;
		top: 48px;
		right: 20px;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.hamburger-lines .line {
		display: block;
		height: 4px;
		width: 100%;
		border-radius: 10px;
		background: var(--main-default);
	}

	.hamburger-lines .line1 {
		transform-origin: 0% 0%;
		transition: transform 0.4s ease-in-out;
	}

	.hamburger-lines .line2 {
		transition: transform 0.2s ease-in-out;
	}

	.hamburger-lines .line3 {
		transform-origin: 0% 100%;
		transition: transform 0.4s ease-in-out;
	}

	.navbar .menu-items {
		padding-top: 120px;
		box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
		height: 100vh;
		width: 100%;
		transform: translate(-150%);
		display: flex;
		flex-direction: column;
		margin-left: -40px;
		padding-left: 50px;
		transition: transform 0.5s ease-in-out;
		text-align: center;
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

				<div className="display-flex flex-align-center gap-64">
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
				</div>
				<div className="hamburger-lines">
					<span className="line line1"></span>
					<span className="line line2"></span>
					<span className="line line3"></span>
				</div>
			</div>
		</StyledNavBar>
	);
};

export default Navbar;

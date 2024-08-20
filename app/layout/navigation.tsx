"use client";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "react-feather";
import { NavLink } from "../components/link/link";
import styled from "styled-components";
import { NavItems } from "./navData";
import { useState } from "react";

const StyledNavBar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1622px;
	width: 100%;
	margin: 0 auto;
	height: 120px;
	padding: 0 64px;
	background-color: var(--main-invert-default);
	box-shadow: 0px 8px 32px rgba(34, 49, 69, 0.04);
	z-index: 120;
	position: fixed;
	left: 50%;
	transform: translate(-50%);

	.MenuItems {
		list-style: none;
		display: flex;
		align-items: center;
		white-space: nowrap;
	}

	.Hamburger-Cross-Icons {
		display: none;
	}

	@media screen and (max-width: 850px) {
		.NavbarItems {
			z-index: 99;
		}
		.MenuItems {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			background-color: var(--main-invert-default);
			width: 100%;
			height: auto;
			backdrop-filter: blur(5px);
			position: absolute;
			align-items: stretch;
			top: 120px;
			left: 110%;
			padding: 24px 64px;
			margin: 0;
			z-index: -1;
			transition: all 0.3s ease-in-out;
		}

		.MenuItems.active {
			left: 0%;
		}

		.Hamburger-Cross-Icons {
			display: block;
			cursor: pointer;
		}
	}
`;

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<StyledNavBar>
			<Link href="/" className="display-flex flex-align-center gap-16">
				<Image alt="logo" src="/dsa-logo.svg" width={100} height={56} />
			</Link>

			<div className="Hamburger-Cross-Icons" onClick={handleClick}>
				{open ? <X size={24} /> : <Menu size={24} />}
			</div>
			<ul
				className={`display-flex gap-32 ${
					open ? "MenuItems active" : "MenuItems"
				}`}
			>
				{NavItems.map((Item, index) => {
					return (
						<li key={index}>
							<NavLink
								target="_blank"
								rel="noopener noreferrer"
								href={Item.url}
								className={Item.cName}
							>
								{Item.title}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</StyledNavBar>
	);
};

export default Navbar;

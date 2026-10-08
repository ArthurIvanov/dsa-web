"use client";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "react-feather";
import { NavLink } from "../components/link/link";
import styled from "styled-components";
import { NavItems, NavItemsMobile } from "./navData";
import { useState, useRef } from "react";
import { CourseDropdown } from "../components/dropdown/dropdown";
import { withBasePath } from "@/lib/basePath";

const StyledNavBar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 120px;
	padding: 0 64px;
	background-color: var(--section-bg);
	box-shadow: 0px 8px 32px rgba(34, 49, 69, 0.04);
	z-index: 120;
	position: fixed;
	left: 50%;
	width: 100%;
	transform: translate(-50%);
	a {
		border-radius: 999px;
	}

	@media screen and (max-width: 1200px) {
		a {
			font-size: 14px;
			line-height: 20px;
		}
	}

	.navbar-content {
		max-width: 1622px;
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.MenuItems {
		list-style: none;
		display: none;
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
		.nav-desktop {
			display: none;
		}
		.MenuItems {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			background-color: var(--section-bg);
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
	const [openArticles, setOpenArticles] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const handleRedirect = () => {
		setOpenArticles(false);
	};
	return (
		<StyledNavBar>
			<div className="navbar-content">
				<Link
					href="/"
					className="display-flex flex-align-center gap-16"
				>
					<Image
						alt="logo"
						src={withBasePath("/dsa-logo.svg")}
						width={100}
						height={56}
					/>
				</Link>
				<div className="nav-desktop display-flex gap-32 flex-align-center">
					<NavLink
						rel={"noopener noreferrer"}
						href={"/articles"}
						onClick={handleRedirect}
					>
						Статьи
					</NavLink>
					<CourseDropdown items={NavItems} dropdownTitle="Курсы" />
					<NavLink
						className="button-primary"
						href="https://rutube.ru/plst/353013"
					>
						Записаться
					</NavLink>
				</div>
				<div className="Hamburger-Cross-Icons" onClick={handleClick}>
					{open ? <X size={24} /> : <Menu size={24} />}
				</div>
				<ul
					className={`display-flex gap-32 ${
						open ? "MenuItems active" : "MenuItems"
					}`}
				>
					{NavItemsMobile.map((Item, index) => {
						return (
							<li key={index}>
								<NavLink
									target={
										Item.ref === true ? "_blank" : "_self"
									}
									href={Item.url}
									className={Item.cName}
								>
									{Item.title}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
		</StyledNavBar>
	);
};

export default Navbar;

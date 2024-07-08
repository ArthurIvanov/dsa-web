"use client";
import Link from "next/link";
import styled from "styled-components";

export const NavLink = styled(Link)`
	color: var(--main-default);
	font-size: 18px;
	line-height: 24px;
	font-weight: 600;

	&:hover {
		color: var(--main-hover);
	}

	&:active {
		color: var(--main-active);
	}
`;

// примерная структура файла
"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { COURSE_DATA } from "@/constants";
import { ChevronDown } from "react-feather";
import { ChevronUp } from "react-feather";
import { NavItems } from "@/app/layout/navData";
import { NavLink } from "../link/link";

interface IDropdownProps {
	dropdownTitle?: string;
	items: {
		title?: string;
		url?: string;
		cName: string;
		ref: boolean;
	}[];
}

const StyledDropdown = styled.div`
	position: relative;
`;
const DropdownButton = styled.button`
	position: relative;
	cursor: pointer;
	border: none;
	background: none;
	font-size: 18px;
	line-height: 24px;
	font-weight: 600;
	color: var(--main-default);
	transition: all 0.2s;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	&:hover {
		color: var(--main-hover);
	}

	&:active {
		color: var(--main-active);
	}
`;
const DropdownPanel = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding: 4px;
	top: 120%;
	right: 0;
	min-width: 300px;
	background-color: var(--section-bg);
	box-shadow: 0px 4px 24px rgba(34, 49, 69, 0.24);
	z-index: 100;
	border-radius: 8px;

	.dropdown-item {
		padding: 8px;
		border-radius: 8px;
		&:hover {
			background-color: var(--grey-100);
		}
	}
`;

export const CourseDropdown = ({
	items,
	dropdownTitle = "Курсы",
}: IDropdownProps) => {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const handleRedirect = () => {
		setOpen(false);
	};

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setOpen(false);
			}
		};
		window.addEventListener("click", handleClick);
		return () => window.removeEventListener("click", handleClick);
	}, []);

	return (
		<StyledDropdown ref={ref}>
			<DropdownButton onClick={() => setOpen((prev) => !prev)}>
				{dropdownTitle}
				{open ? (
					<ChevronUp strokeWidth={3} size={20} />
				) : (
					<ChevronDown strokeWidth={3} size={20} />
				)}
			</DropdownButton>
			{open && (
				<DropdownPanel>
					{Object.entries(items).map(([key, course]) => (
						<NavLink
							className={`dropdown-item`}
							key={key}
							href={`${course?.url}`}
							onClick={handleRedirect}
						>
							{course?.title}
						</NavLink>
					))}
				</DropdownPanel>
			)}
		</StyledDropdown>
	);
};

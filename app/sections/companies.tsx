import ReactComponent, { HTMLAttributes } from "react";
import styled from "styled-components";
import { Image } from "../components/img/img";
import { withBasePath } from "@/lib/basePath";

interface ICompaniesProps extends HTMLAttributes<HTMLDivElement> {}

const StyledCompanies = styled.div<ICompaniesProps>`
	text-align: center;
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
	padding: 64px;
	background: var(--section-bg);
	border-radius: 16px;
	overflow: hidden;

	h2 {
		text-align: center;
	}

	.companies-stack {
		display: inline-flex;
		gap: inherit;
		flex-wrap: wrap;
		justify-content: center;
	}
`;

export const Companies: React.FC<ICompaniesProps> = () => {
	return (
		<StyledCompanies className="container">
			<h3>Компании, сотрудники которых прошли обучение</h3>
			<div className="companies-stack">
				<img src={withBasePath("/MTC_Logo_RGB.png")} />
				<img src={withBasePath("/t-bank.png")} />
				<img src={withBasePath("/rosatom.png")} />
				<img src={withBasePath("/alfaBank.png")} />
			</div>
		</StyledCompanies>
	);
};

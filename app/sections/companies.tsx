import ReactComponent, { HTMLAttributes } from "react";
import styled from "styled-components";
import { Image } from "../components/img/img";

interface ICompaniesProps extends HTMLAttributes<HTMLDivElement> {}

const StyledCompanies = styled.div<ICompaniesProps>`
	text-align: center;
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;

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
				<img src="/MTC_Logo_RGB.png" />
				<img src="/t-bank.png" />
				<img src="/rosatom.png" />
				<img src="/alfaBank.png" />
			</div>
		</StyledCompanies>
	);
};

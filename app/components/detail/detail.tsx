import styled from "styled-components";

export const Detail = styled.span`
	font-size: 14px;
	line-height: 20px;
	font-weight: 500;
	display: inline-flex;
	align-items: center;
	gap: 8px;
	color: var(--secondary-default);

	@media screen and (max-width: 560px) {
		font-size: 12px;
		line-height: 16px;
	}
`;

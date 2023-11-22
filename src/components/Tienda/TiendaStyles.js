import styled from "styled-components";

export const TiendaContainerStyled = styled.div`
	display: flex;
	width: 100vw;
	height: auto;
	margin-top: 10px;
`

export const LeftContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: 20%;
	left: 0;
	border-right: 1px solid var(--secondary);
	align-items: center;
`

export const ListCategoriesStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const CategoryStyled = styled.a`
	font-size: 18px;
	color: var(--text);
`

export const RightContainerSyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	height: auto;
	right: 0;
	align-items: center;

	h2{
		font-size: 30px;
	}
`
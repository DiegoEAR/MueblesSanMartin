import styled from "styled-components";

export const TitleTiendaStyled = styled.h2`
	font-size: 38px;
	color: var(--text);
`

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
	padding-top: 30px;

	@media (max-width: 650px) {
    display: none;
  }
`

export const ListCategoriesStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 10px;
`

export const CategoryStyled = styled.a`
	font-size: 18px;
	color: var(--text);
`

export const RightContainerSyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: auto;
	right: 0;
`

export const ProductsContainerStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 90%;
	height: auto;
	right: 0;
	align-items: center;
	justify-content: center;

	>*{
		flex: 1 1 30%;
	}

	@media (max-width: 470px) {
    >*{
			flex: 1 1 50%;
		}
  }
`

export const TitleContainerStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 30px;
`

export const IconFilterContainer = styled.div`
	cursor: pointer;

	@media (min-width: 650px) {
		display: none;
	}
`
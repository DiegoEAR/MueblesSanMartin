import styled from "styled-components";

export const TitleTiendaStyled = styled.h2`
	font-size: 38px;
	color: var(--text);
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const TiendaContainerStyled = styled.div`
	display: flex;
	max-width: 1600px;
	width: 100%;
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
	height: 100%;

	user-select: none;

	h3{
		font-size: 24px;
		font-weight: 600;
	}

	@media (max-width: 650px) {
    display: none;
	}
`

export const ListCategoriesStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 10px;	
	margin-top: 10px;
	width: 90%;
	background-color: ${({ selected }) =>
    selected ? 'var(--sdt)' : 'var(--background)'};
`

export const CategoryStyled = styled.a`
	font-size: 16px;
	color: var(--text);
	cursor: pointer;
`

export const RightContainerSyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
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

export const ButtonContainerStyled = styled.div`
	display: flex;
	justify-content: center;
	bottom: 0;
	gap: 30px;
	margin-top: 50px;
`

export const ButtonSX = {
  backgroundColor: 'var(--sdt)',

  "&:hover": {
    backgroundColor: "var(--primary)",
  }
}
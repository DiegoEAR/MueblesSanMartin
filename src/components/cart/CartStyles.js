import styled from "styled-components";


export const CartStyledContainer = styled.div`
  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
  top: 71px;
  right: 0;
  width: 480px;
  height: 100vh;
  z-index: 999;

  background-color: var(--primary);
	border-left: 1px solid var(--secondary); 

	@media (max-width: 496px) {
		width: 100%;
	}
`

export const CartTitleStyled = styled.h3`
	font-size: 32px;
	font-weight: 600;
	text-align: center;
	width: 90%;
	margin: 0.5rem;

	@media (max-width: 496px) {
		font-size: 28px;
		margin-top: 20px;
	}
`

export const CartItemsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	width: 95%;
	gap: 1rem;
	height: 100%;
	margin-top: 1rem;
	margin-bottom: 1rem;
	overflow-x: hidden;
	overflow-y: scroll;
	scroll-behavior: smooth;

	@media (max-width: 496px) {
		gap: 5px;
	}

	&::-webkit-scrollbar {
    width: 8px;
}

	&::-webkit-scrollbar-track {
    background-color: var(--primary);
}

	&::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
    border-radius: 8px;
		width: 4px;
	}

	&::-webkit-scrollbar-button {
    display:none;
}
`

export const CartButtonsContainerStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90%;
	gap: 1rem;
	margin-bottom: 6rem;

	@media (max-width: 496px) {
		padding: 5px;
	}
`

export const ButtonStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--background);
	padding: 1rem;
	gap: 1rem;
	height: 40px;
	border: 1px solid var(--secondary);
	border-radius: 1rem;

	p{
		font-size: 18px;
		font-weight: 600;
	}
`

export const PriceContainer = styled.div`
	width: 70%;

	@media (max-width: 496px) {
		width: 85%;
	}
`

export const TotalPriceStyled = styled.p`
	font-weight:600;
	font-size: 28px;
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
	background-color: var(--background);
	padding: 1rem;
	height: 30px;
	border: 1px solid var(--secondary);
	border-radius: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
`
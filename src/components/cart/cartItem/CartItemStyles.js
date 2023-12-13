import styled from "styled-components";

export const CartItemContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  gap: 1rem;
  background-color: var(--background);
  border-radius: 1rem;
  border: 1px solid var(--secondary);

  @media (max-width: 496px) {
		justify-content: space-between;
    height: 100%;
	}
`

export const CartItemImg = styled.img`
  width: 40%;
  height: 100%;
  background-color: white;
  border-radius: 1rem 0 0 1rem;
`

export const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-right: 2rem;
  width: 100%;
  height: 100%;

  @media (max-width: 496px) {
		gap: 5px;
	}
`

export const CartItemTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
	text-align: center;
	width: 100%;

  @media (max-width: 496px) {
    font-size: 16px;
    
  }
`

export const CartItemPrice = styled.span`
  font-size: 18px;
  font-weight: 600;
`

export const CartItemButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid var(--secondary);
  }
`
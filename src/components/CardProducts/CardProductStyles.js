import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  background-color: var(--background);
  width: 20vw; 
  padding: 1rem;
  cursor: pointer;

  &:hover{
    background-color: var(--sdt);
  }
`

export const ProductImg = styled.img`
  width: 100%;
  height: auto;
`

export const ProductTitle = styled.h3`
  font-size: 20px;
  width: 95%;
  color: var(--text);
`

export const PriceContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const ProductPrice = styled.span`
  font-size: 32px;
  font-weight: 600;
  color: var(--text);
`
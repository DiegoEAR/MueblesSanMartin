import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-color: var(--background);
  max-width: 399px;
  max-height: 535px;
  width: 100%;
  height: 100%;
  padding: 1rem;
  cursor: pointer;

  &:hover{
    background-color: var(--sdt);
  }
`

export const ProductImg = styled.img`
  max-width: 367px;
  max-height: 367px;
  width: auto;
  height: auto;
  background-color: white;
`

export const ProductTitle = styled.h3`
  font-size: 28px;
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
import styled from "styled-components";

export const IntroContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  max-width: 1600px;
  width: 100%;
  margin-top: 6rem;
  background-color: var(--sdt);

  @media (max-width: 832px) {
    flex-wrap: wrap;
  }
`

export const IconsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

&:hover{
  border-left: 1px solid var(--primary);
  border-right: 1px solid var(--primary);
}
`

export const TextIconStyled = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`
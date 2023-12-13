import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1600px;
  width: 100%;
  height: 100%;
  background-color: var(--sdt);
  margin-top: 10px;

  @media (max-width: 799px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`
export const HeroImgStyled = styled.img`
  width: 100%;
  height: 100% auto;

  @media (max-width: 1250px) {
    width: 50%;
  }

  @media (max-width: 799px) {
    display: none;
  }
`

export const TextHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;


  h1 {
    font-size: 48px;
    font-weight: 900;
    text-align: center;

    @media (max-width: 1250px) {
    font-size: 32px;
  }

  @media (max-width: 799px) {
    font-size: 40px
  }
  }

  p {
    font-size: 30px;
    text-align: center;

    @media (max-width: 1250px) {
      font-size: 22px;
  }

  @media (max-width: 799px) {
    font-size: 26px;
  }
  }
`

export const TextStyled = styled.p`
  font-size: 30px;
`

export const ContactStyledContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`

export const ButtonsStyledContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`
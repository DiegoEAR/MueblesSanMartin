import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: var(--sdt);
  margin-top: 10px;
`
export const HeroImgStyled = styled.img`
  height: 80vh;
`

export const ImgStyled1 = styled(HeroImgStyled)`
  @media (max-width:1070px) {
    display: none;
  }
`
export const ImgStyled2 = styled(HeroImgStyled)`
    @media (max-width:1500px) {
    display: none;
  }
`

export const TextHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    width: 100%
  }

    @media (max-width: 1070px) {
      img {
        width: 70%;
        margin-top: 40px;
      }
    }

  h1 {
    font-size: 32px;
    font-weight: 900;
    text-align: center;
  }

  p {
    font-size: 30px;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-bottom: 30px;
  }

  span {
    font-size: 28px;
    text-align: center;
  }
`

import styled from "styled-components";

export const NosotrosContainerStyled = styled.div `
  position: relative;
  max-width: 1600px;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

export const BgImgStyled = styled.div`
  position: absolute;
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1600px;
  max-height: 585px;
  background-image: url("/nosotros1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  background-color: var(--sdt);
  z-index: -1;
`

export const TitleContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  font-size: 50px;
  background-color: var(--background);
  border-radius: 2rem;
  border: 1px solid var(--secondary);
  padding: 2rem;
  box-sizing: border-box;
  height: 100px;

  @media (max-width: 520px) {
    font-size: 32px
  }
`

export const InfoNosotrosContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
` 

export const TextoPrincipalStyled = styled.h2`
  font-size: 32px;
  text-align: center;
  max-width: 1600px;
  width: 90%;
  margin-top: 3rem;

  @media (max-width: 900px) {
    font-size: 26px;
  }
`

export const TextoNosotrosStyled = styled.p`
  font-size: 26px;
  max-width: 1600px;
  width: 60%;

  @media (max-width: 900px) {
    font-size: 22px;
    text-align: center;
  }
`

export const ImgFrente = styled.img`
  width: 60%;

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 2rem;
  }
`
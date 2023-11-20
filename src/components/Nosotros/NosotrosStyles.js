import styled from "styled-components";

export const NosotrosContainerStyled = styled.div `
  position: relative;
  height: 100vw;
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
  background-image: url("/public/nosotros1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  /* background-size: auto 100%; */
  background-color: var(--sdt);
  /* filter: blur(2px); */
  z-index: -1;
`

export const TextContainerStyled = styled.div`
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
  /* margin-right: 400px; */
`

export const InfoNosotrosContainerStyled = styled.div`

` 
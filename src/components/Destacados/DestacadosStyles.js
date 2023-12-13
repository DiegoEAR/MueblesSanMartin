import styled from "styled-components";

export const CarouselContainerStyled = styled.div`
  display: flex;
  max-width: 1400px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;
  padding: 0;
  border-radius: 1rem;
  background: cover;
  background-color: var(--sdt);

    @media (max-width: 1250px) {
    padding: 0 0 0 0;
    background-color: transparent;
    flex-direction: column;
  }
`
export const ImgCarrouselStyled = styled.img`
  height: 30vw;
  border-radius: 0 1rem 1rem 0;
  padding: 1rem;
  background-color: white;
  max-width: 700px;
  max-height: 700px;
  

  @media (max-width: 1250px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    width: 100% auto;
    border-radius: 1rem;
  }

  @media (max-width: 720px) {
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
  }
`

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 3rem;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  padding: 1rem;

  span{
    font-size: 40px;
    font-weight: 900;
  }

  @media (max-width: 1250px){
    justify-content: center;
    align-items: center;
    margin-left: 0; 
  }
`

export const PriceContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 1250px) {
    position: absolute;
    align-items: center;
    width: 60%;
    gap: 2rem;
    bottom: 3rem;
    padding: 5px;
    border-radius: 1rem;
    background-color: var(--textV);
    color: var(--background);
    
    span {
      font-size: 30px;
    }
  }

    @media (max-width:720px) {
      max-width: 100%;
      max-height: 40%;
      gap: 0;
      
      background: var(--sdt);
      border-radius: 1rem;
      margin-top: 80%;

      span {
      font-size: 20px;
      color: var(--text);
      font-weight: 600;
      text-shadow: 2px 2px 3px white;
    }
    }
`

export const TitleContainerStyled = styled.div`

  display: flex;
  flex-direction: column;
  margin-right: 30px;
  justify-content: flex-start;

  h2 {
    font-size: 46px;
    font-weight: 900;
  }

  p {
    font-size: 24px;
  }

  @media (max-width: 1250px) {
    display: none;
  }
`

export const ButtonStyled = styled.button`
  width: 150px;
  height: 75px;
  background-color: var(--background);
  border: none;
  border-radius: 1rem;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  border: 0.5px solid var(--secondary);

  @media (max-width:720px) {
    width: 100%;
    height: 40%;
  }
`
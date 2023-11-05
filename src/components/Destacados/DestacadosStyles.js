import styled from "styled-components";

export const CarouselContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  padding: 0;
  padding-bottom: 1rem;
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
  border-radius: 2rem;
  padding: 1rem;
  

  @media (max-width: 1250px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70%;
    width: 100%;
  }
`

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-left: 30px;
  border-radius: 2rem;
  padding: 1rem;

  span{
    font-size: 40px;
    font-weight: 900;
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
    margin-top: 80%;
    padding: 1rem;
    border-radius: 1rem;
    background-color: var(--textV);
    color: var(--background);
    
    span {
      font-size: 30px;
    }
  }

    @media (max-width:720px) {
      max-width: 40%;
      max-height: 40%;
      background: none;

      span {
      font-size: 20px;
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
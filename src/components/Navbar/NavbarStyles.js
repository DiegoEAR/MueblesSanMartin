import styled from "styled-components";

export const NavbarContainerStyled = styled.div`
  background: var(--primary);
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: fixed;
  z-index: 3;
`

export const ImgLogoNav = styled.img`
  max-width: 100px;
`

export const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;

  @media (max-width: 600px) {
    justify-content: flex-end;
  }
`

export const ListContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a{
    padding: 1rem;
  }

  @media (max-width: 600px) {
    display: ${props => (props.$isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    height: 30vh;
    justify-content: center;
    align-items: center;
    position: absolute;
    gap: 1rem;
    margin-top: 53px;
    background-color: var(--primary);
    border-bottom: 1px solid var(--secondary);
  }
`

export const NavbarButtonStyled = styled.div`   
  font-size: 1rem;
  display: flex;

  a{
    color: var(--text);
    font-weight: 600;
    cursor: pointer;
    font-size: 18px;

    &:hover{
        color: var(--textV);
        font-size: 20px;
        box-shadow: 0px 0px 1px 1px var(--text);
      }

    @media (max-width: 600px) {
      font-size: 28px;

      &:hover{
        color: var(--textV);
        font-size: 30px;
      }
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex; 
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  cursor: pointer;
`

export const IconButtonStyled = styled(NavbarButtonStyled)`
  display: none;

  @media (max-width: 600px) {
    display: flex;
  }
`


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

  div img {
    max-width: 100px;
  }
`

export const ListContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-right: 30px;

  a{
    padding: 1rem;
  }
`

export const NavbarButtonStyled = styled.div`   
  font-size: 1rem;
  display: flex;

  @media (max-width: 600px) {
    display: none;
  }

  
  a{
    color: var(--textV);
    font-weight: 600;
  }
`
export const IconButtonStyled = styled(NavbarButtonStyled)`
  display: none;

  @media (max-width: 600px) {
    display: flex;
  }
`


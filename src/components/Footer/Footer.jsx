import React from 'react'
import { FooterContainerStyled, FooterLinksStyled, FooterSignContainer } from './FooterStyles'

const Footer = () => {
  return (
    <>
      <FooterContainerStyled>
        <FooterLinksStyled>
          <a href="/#">Términos y condiócines</a>
          <a href="/#">Trabajá con Nosotros</a>
          <a href="/#">Soporte</a>
        </FooterLinksStyled>
        <FooterSignContainer>
          <p>Hecho por</p>
          <span>DiegoEAR</span>
        </FooterSignContainer>
      </FooterContainerStyled>
    </>
  )
}

export default Footer
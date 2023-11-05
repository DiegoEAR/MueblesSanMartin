import React from 'react'
import { BsWhatsapp, BsFillTelephoneFill } from 'react-icons/bs'
import { HeroContainerStyled, TextHeroContainer, ImgStyled1, ImgStyled2 } from './HeroStyles'

const Hero = () => {
  return (
    <>
      <HeroContainerStyled>
        <ImgStyled1 src="/public/17-132-VENECIA.png"/>
        <TextHeroContainer>
          <img src="/public/Logo.png" alt="" />
          <h1>25 DE MAYO 1936 | SAN MARTIN</h1>
          <div>
            <BsFillTelephoneFill size={'50px'}/>
            <p>4752-7747 / 4752-7809</p>
          </div>
          <div>
            <BsWhatsapp size={"50px"}/>
            <span>+5491132318324</span>
          </div>
        </TextHeroContainer>
        <ImgStyled2 src="/public/134-INTERIOR.png"/>
      </HeroContainerStyled>
    </>
  )
}

export default Hero
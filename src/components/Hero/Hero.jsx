import React from 'react'
import {  BsFillTelephoneFill, BsFacebook, BsInstagram, BsWhatsapp} from 'react-icons/bs';
import { ButtonsStyledContainer, ContactStyledContainer, HeroContainerStyled, HeroImgStyled, TextHeroContainer, TextStyled,} from './HeroStyles';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <HeroContainerStyled>
        <HeroImgStyled src='/Header.jpg'/>

        <TextHeroContainer>
          <h1>MUEBLES SAN MARTIN</h1>

          <TextStyled>Compra Fácil, Rápido y Segura!</TextStyled>

          <ContactStyledContainer>
            <BsFillTelephoneFill size={'30px'}/>
            <p>4752-7747 / 4752-7809</p> 
          </ContactStyledContainer>

          <ButtonsStyledContainer>

            <motion.div whileTap={{scale: 0.8}}>
              <BsFacebook size={'60px'} className='IconContact'/>
            </motion.div>
            <motion.div whileTap={{scale: 0.8}}>
              <BsInstagram size={'60px'}/>
            </motion.div>
            <motion.div whileTap={{scale: 0.8}}>
              <BsWhatsapp size={'60px'}/>
            </motion.div>

          </ButtonsStyledContainer>

        </TextHeroContainer>
      </HeroContainerStyled>
    </>
  )
}

export default Hero
import React from 'react'
import { IconsContainerStyled, IntroContainerStyled, TextIconStyled } from './IntroNosotrosStyles';
import { FaShippingFast, FaCreditCard, FaMoneyBillWave, FaShoppingCart } from "react-icons/fa";

const IntroNosotros = () => {
  return (
    <>
      <IntroContainerStyled>

        <IconsContainerStyled>
          <FaShippingFast size={'70px'}/>
          <TextIconStyled>Entregas hasta la puerta de tu casa</TextIconStyled>
        </IconsContainerStyled>

        <IconsContainerStyled>
          <FaCreditCard size={'70px'}/>
          <TextIconStyled>Cuotas con tarjeta de credito</TextIconStyled>
        </IconsContainerStyled>

        <IconsContainerStyled>
          <FaMoneyBillWave size={'70px'}/>
          <TextIconStyled>Descuentos en efectivo</TextIconStyled>
        </IconsContainerStyled>

        <IconsContainerStyled>
          <FaShoppingCart size={'70px'}/>
          <TextIconStyled>Compras OnLine o en el Local</TextIconStyled>
        </IconsContainerStyled>

      </IntroContainerStyled>
    </>
  )
}

export default IntroNosotros
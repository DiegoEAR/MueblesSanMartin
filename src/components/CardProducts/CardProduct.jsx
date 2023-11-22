import React from 'react'
import { PriceContainer, ProductCardContainer, ProductImg, ProductPrice, ProductTitle } from './CardProductStyles'
import { BiSolidCartAdd } from "react-icons/bi";
import { motion } from 'framer-motion'

const CardProduct = () => {
  return (
    <>
      <ProductCardContainer>

        <ProductImg src='../../../public/2,12 tabaco.jpg'/>
        <ProductTitle>PLACARD BAHIA LINEA NORDICA 2 CUERPOS 2,10</ProductTitle>

        <PriceContainer>

          <ProductPrice>$219000</ProductPrice>
          <motion.div whileTap={{scale: 0.8}}>
            <BiSolidCartAdd size={"35px"} />
          </motion.div>

        </PriceContainer>

      </ProductCardContainer>
    </>
  )
}

export default CardProduct
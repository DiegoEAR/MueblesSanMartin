import React from 'react'
import { PriceContainer, ProductCardContainer, ProductImg, ProductPrice, ProductTitle } from './CardProductStyles'
import { BiSolidCartAdd } from "react-icons/bi";
import { motion } from 'framer-motion'
import { addToCart } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';


const CardProduct = ({ image, title, price, id}) => {

  const dispatch = useDispatch();

  return (
    <>
      <ProductCardContainer>

        <ProductImg src={image} alt={title}/>
        <ProductTitle>{title}</ProductTitle>

        <PriceContainer>

          <ProductPrice>${price}</ProductPrice>
          <motion.div 
            whileTap={{scale: 0.8}}
            onClick={() =>
              dispatch(addToCart({ id, image, title, price }))
            }
          >
            <BiSolidCartAdd size={"35px"} />
          </motion.div>

        </PriceContainer>

      </ProductCardContainer>
    </>
  )
}

export default CardProduct
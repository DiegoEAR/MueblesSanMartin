import React from 'react'
import { CartInfoContainer, CartItemButtonsContainer, CartItemContainerStyled, CartItemImg, CartItemPrice, CartItemTitle } from './CartItemStyles'
import { motion } from 'framer-motion'
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/cart/cartSlice';


const CartItem = ({image, title, price, id, quantity}) => {
  const dispatch = useDispatch();

  return (
    <>
      <CartItemContainerStyled>

        <CartItemImg src={image} alt={title}/>

        <CartInfoContainer>

          <CartItemTitle>{title}</CartItemTitle>
          <CartItemPrice>{price}</CartItemPrice>
          <CartItemButtonsContainer>
            <motion.div 
            whileTap={{scale: 0.9}}
            onClick={() => dispatch(removeFromCart(id))}
            >
              <FaMinus />
            </motion.div>

            <div>
              <span>{quantity}</span>
            </div>

            <motion.div 
            whileTap={{scale: 0.9}}
            onClick={() => dispatch(addToCart({ image, title, price, id }))}
            >
              <FaPlus />
            </motion.div>
          </CartItemButtonsContainer>

        </CartInfoContainer>

      </CartItemContainerStyled>
    </>
  )
}

export default CartItem
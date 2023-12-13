import React from 'react';
import { ButtonStyled, CartButtonsContainerStyled, CartItemsContainer, CartStyledContainer, CartTitleStyled, PriceContainer, TotalPriceStyled } from './CartStyles'
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import {FaCashRegister, FaTrashAlt } from "react-icons/fa";
import CartItem from './cartItem/CartItem';
import { clearCart } from '../../redux/cart/cartSlice';



const Cart = () => {

  const cartHidden = useSelector(state => state.cart.hidden);

  const dispatch = useDispatch();


  const { cartItems } = useSelector(state => state.cart);
  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
  <>
    {!cartHidden && (
  <AnimatePresence>
      <motion.div
      initial={{ translateX: 100, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: 100, opacity: 0 }}
      transition={{ type: 'ease', damping: 20, stiffness: 300 }}
      key='cart-hidden-animation'
      >
      <CartStyledContainer>

        <CartTitleStyled>~CARRITO~</CartTitleStyled>

        <CartItemsContainer>

        {cartItems.length ? (
          cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          )) ) : ( <p>El carrito está vacio.</p>
        )}

        </CartItemsContainer>

        <PriceContainer>
          <TotalPriceStyled>${totalPrice}</TotalPriceStyled>
        </PriceContainer>

        <CartButtonsContainerStyled>

          <motion.div 
          whileTap={{scale: 0.9}}
          onClick={() => dispatch(clearCart())}
          >
            <ButtonStyled >
              <FaTrashAlt size={'40px'}/>
            </ButtonStyled>
          </motion.div>

          <motion.div 
          whileTap={{scale: 0.9}}
          onClick={() => dispatch(clearCart())}
          >
            <ButtonStyled>
              <FaCashRegister  size={'45px'}/>
              <p>Finalizar Compra</p>
            </ButtonStyled>
          </motion.div>

        </CartButtonsContainerStyled>

      </CartStyledContainer>
      </motion.div>
  </AnimatePresence>
    )}
  </>
  )
}

export default Cart
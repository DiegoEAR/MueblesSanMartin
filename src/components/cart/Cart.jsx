import React from 'react';
import { ButtonStyled, CartButtonsContainerStyled, CartItemsContainer, CartStyledContainer, CartTitleStyled, PriceContainer, TotalPriceStyled } from './CartStyles'
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import {FaCashRegister, FaTrashAlt } from "react-icons/fa";
import CartItem from './cartItem/CartItem';
import { clearCart } from '../../redux/cart/cartSlice';
import Swal from 'sweetalert2';



const Cart = () => {

  const cartHidden = useSelector(state => state.cart.hidden);

  const dispatch = useDispatch();


  const { cartItems } = useSelector(state => state.cart);
  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  const handleCheckout = () => {
    Swal.fire({
      title: '¿Desea finalizar su compra?',
      text: `El precio a abonar es $${totalPrice}`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3131ce',
      cancelButtonColor: 'var(--secondary)',
      confirmButtonText: 'Finalizar Compra'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        Swal.fire('¡Gracias por tu compra!', 'Nos contactaremos a la brevedad.', 'success');
      }
    });
  };

  const handleClearCart = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción vaciará tu carrito de compras.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3131ce',
      cancelButtonColor: 'var(--secondary)',
      confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        Swal.fire('¡Carrito eliminado con éxito!', 'Tu carrito ha sido vaciado.', 'success');
      }
    });
  };

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
          onClick={handleClearCart}
          >
            <ButtonStyled >
              <FaTrashAlt size={'40px'}/>
            </ButtonStyled>
          </motion.div>

          <motion.div 
          whileTap={{scale: 0.9}}
          onClick={handleCheckout}
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
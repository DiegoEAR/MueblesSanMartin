import React from 'react'
import { CartInfoContainer, CartItemButtonsContainer, CartItemContainerStyled, CartItemImg, CartItemPrice, CartItemTitle } from './CartItemStyles'
import { motion } from 'framer-motion'
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/cart/cartSlice';
import Swal from 'sweetalert2';


const CartItem = ({image, title, price, id, quantity}) => {

  const handleMinus = () => {
    Swal.fire({
      title: '¿Eliminar una unidad del producto?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3131ce',
      cancelButtonColor: 'var(--secondary)',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(id));
      }
    });
  };

  const handlePlus = () => {
    Swal.fire({
      title: '¿Agregar una unidad del producto?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3131ce',
      cancelButtonColor: 'var(--secondary)',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(addToCart({ image, title, price, id }));
      }
    });
  };

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
            onClick={handleMinus}
            >
              <FaMinus />
            </motion.div>

            <div>
              <span>{quantity}</span>
            </div>

            <motion.div 
            whileTap={{scale: 0.9}}
            onClick={handlePlus}
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
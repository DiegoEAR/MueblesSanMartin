import React from 'react'
import { PriceContainer, ProductCardContainer, ProductImg, ProductPrice, ProductTitle } from './CardProductStyles'
import { BiSolidCartAdd } from "react-icons/bi";
import { motion } from 'framer-motion'
import { addToCart } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';


const CardProduct = ({ image, title, price, id}) => {

  const handleAddToCart = () => {

    const Confirm = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });

    Swal.fire({
      title: '¿Desea agregar el producto al carrito?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3131ce',
      cancelButtonColor: 'var(--secondary)',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(addToCart({ id, image, title, price }));
        Confirm.fire({
          icon: "success",
          title: "Agregado con éxito!",
        });
      }
    });
  };

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
            onClick={handleAddToCart}
          >
            <BiSolidCartAdd size={"35px"} />
          </motion.div>

        </PriceContainer>

      </ProductCardContainer>
    </>
  )
}

export default CardProduct
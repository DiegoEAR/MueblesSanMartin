import React, { useContext } from 'react'
import { ListContainerStyled, NavbarButtonStyled, NavbarContainerStyled, IconButtonStyled, NavbarStyled, ButtonsContainer, ImgLogoNav} from './NavbarStyles';
import { motion } from 'framer-motion';
import { BiSolidCart } from "react-icons/bi";
import { ImMenu } from 'react-icons/im';
import { MenuContext } from '../Context/MenuContext';
import { useDispatch } from 'react-redux';
import { toggleHiddenCart } from '../../redux/cart/cartSlice';
import Cart from '../cart/Cart';


const Navbar = () => {

  const dispatch = useDispatch();

  //CartToggle
  const handleToggleCart = () => {
    dispatch(toggleHiddenCart());
  };


  //MenuToggle
  const {isOpen, setIsOpen} = useContext(MenuContext);
  const MenuToggle = () => { setIsOpen(!isOpen) };

  return (
    <>
    <NavbarContainerStyled>


        <ImgLogoNav href="/#" src="/Logo.png" alt="Logo" />


      <NavbarStyled>

        <ListContainerStyled $isOpen={isOpen}>

          <NavbarButtonStyled>
            <motion.div whileTap={{scale: 0.9}}>
              <a href="/">Inicio</a>
            </motion.div>
          </NavbarButtonStyled>

          <NavbarButtonStyled>
            <motion.div whileTap={{scale: 0.9}}>
              <a href="/tienda">Tienda</a>
            </motion.div>
          </NavbarButtonStyled>

          <NavbarButtonStyled>
            <motion.div whileTap={{scale: 0.9}}>
              <a href="/nosotros">Nosotros</a>
            </motion.div>
          </NavbarButtonStyled>

          <NavbarButtonStyled>
            <motion.div whileTap={{scale: 0.9}}>
              <a href="/contacto">Contacto</a>
            </motion.div>
          </NavbarButtonStyled>
          
        </ListContainerStyled>

        <ButtonsContainer>

          <IconButtonStyled >
            <motion.div whileTap={{scale: 0.8}} onClick={MenuToggle} >
              <ImMenu size={"25px"} />
            </motion.div>
          </IconButtonStyled>

            <motion.div whileTap={{scale: 0.8}} style={{marginRight: '1rem'}} onClick={handleToggleCart}>
              <BiSolidCart size={"30px"}/>
            </motion.div>

        </ButtonsContainer>


          <Cart/>


      </NavbarStyled>
    </NavbarContainerStyled>
    </>
  )
}

export default Navbar
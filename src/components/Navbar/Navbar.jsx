import React from 'react'
import { ListContainerStyled, NavbarButtonStyled, NavbarContainerStyled, IconButtonStyled } from './NavbarStyles'
import { motion } from 'framer-motion'
import { BiSolidCart } from "react-icons/bi";
import { ImMenu } from 'react-icons/im'

const Navbar = () => {
  return (
    <>
    <NavbarContainerStyled>

      <div>
        <img href="/#" src="/Logo.png" alt="" />
      </div>

      <ListContainerStyled>
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

        <IconButtonStyled>
          <motion.div whileTap={{scale: 0.8}}>
            <ImMenu size={"25px"}/>
          </motion.div>
        </IconButtonStyled>

          <motion.div whileTap={{scale: 0.8}}>
            <BiSolidCart  size={"30px"}/>
          </motion.div>

      </ListContainerStyled>

    </NavbarContainerStyled>
    </>
  )
}

export default Navbar
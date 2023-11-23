import React from 'react'
import CardProduct from '../CardProducts/CardProduct'
import { CategoryStyled, IconFilterContainer, LeftContainerStyled, ListCategoriesStyled, ProductsContainerStyled, RightContainerSyled, TiendaContainerStyled, TitleContainerStyled, TitleTiendaStyled } from './TiendaStyles'
import { BiSolidFilterAlt } from "react-icons/bi";

const Tienda = () => {
  return (
    <>
      <TiendaContainerStyled>
        
        <LeftContainerStyled>
          <h3>Categorias</h3>
          <ListCategoriesStyled>
            <CategoryStyled>Placards</CategoryStyled>
            <CategoryStyled>Placards</CategoryStyled>
            <CategoryStyled>Placards</CategoryStyled>
            <CategoryStyled>Placards</CategoryStyled>
            <CategoryStyled>Placards</CategoryStyled>
            <CategoryStyled>Placards</CategoryStyled>
          </ListCategoriesStyled>
        </LeftContainerStyled>
      
        <RightContainerSyled>
          <TitleContainerStyled>
            <IconFilterContainer>
              <BiSolidFilterAlt size={"38px"}/>
            </IconFilterContainer>
            <TitleTiendaStyled> TIENDA </TitleTiendaStyled>
          </TitleContainerStyled>
          <ProductsContainerStyled>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </ProductsContainerStyled>
        </RightContainerSyled>

      </TiendaContainerStyled>
    </>
  )
}

export default Tienda
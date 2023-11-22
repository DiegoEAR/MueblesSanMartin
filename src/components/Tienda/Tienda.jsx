import React from 'react'
import CardProduct from '../CardProducts/CardProduct'
import { CategoryStyled, LeftContainerStyled, ListCategoriesStyled, RightContainerSyled, TiendaContainerStyled } from './TiendaStyles'

const Tienda = () => {
  return (
    <>
      <TiendaContainerStyled>

        <LeftContainerStyled>
          <h2>Categorias</h2>
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
        </RightContainerSyled>

      </TiendaContainerStyled>
    </>
  )
}

export default Tienda
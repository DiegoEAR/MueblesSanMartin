import React, { useEffect, useState } from 'react'
import CardProduct from '../CardProducts/CardProduct'
import { ButtonContainerStyled, ButtonSX, IconFilterContainer, LeftContainerStyled,ProductsContainerStyled, RightContainerSyled, TiendaContainerStyled, TitleContainerStyled, TitleTiendaStyled } from './TiendaStyles'
import { BiSolidFilterAlt } from "react-icons/bi";
import Categoria from './Categoria';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { toggleVisibility } from '../../redux/filter/filterSlice';


const Tienda = () => {

  const categories = useSelector(state => state.categories.categories);

  const INITIAL_LIMIT = 9;
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  let products = useSelector(state => state.products.products);
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );

  const totalProducts = useSelector(state => state.products.totalProducts);

  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
  }

  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.filter.isVisible);

  return (
    <>
      <TiendaContainerStyled>
        
        <LeftContainerStyled $isVisible={isVisible}>
          <h3>Categorias</h3>
          

        {categories.map(category => (
          <Categoria key={category.id} {...category} />
        ))}

        </LeftContainerStyled>
      
        <RightContainerSyled>
          <TitleContainerStyled>
            <motion.div whileTap={{scale: 0.8}}>
            <IconFilterContainer onClick={() => dispatch(toggleVisibility())}>
              <BiSolidFilterAlt size={"38px"}/>
            </IconFilterContainer>
            </motion.div>
            <TitleTiendaStyled> TIENDA </TitleTiendaStyled>
          </TitleContainerStyled>
          <ProductsContainerStyled>

          {Object.entries(products).map(([, products]) =>
          products.map(product => {
            if (limit >= product.id || selectedCategory) {
              return <CardProduct key={product.id} {...product} />;
            }
            return null;
          })
          )}

          </ProductsContainerStyled>

          <ButtonContainerStyled>
            <Button 
            variant='contained' 
            sx={ButtonSX}
            onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)} 
            disabled={INITIAL_LIMIT === limit}
            >Ver menos</Button>

            <Button 
            variant='contained'
            sx={ButtonSX}
            onClick={() => setLimit(prevLimit => prevLimit + INITIAL_LIMIT)}
            disabled={totalProducts <= limit}
            >Ver mas</Button>
          </ButtonContainerStyled>

        </RightContainerSyled>

      </TiendaContainerStyled>
    </>
  )
}

export default Tienda
import React from 'react'
import { CategoryStyled, ListCategoriesStyled } from './TiendaStyles'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/categoriesSlice';

export const Categoria = ({title, category}) => {

  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );

  const dispatch = useDispatch();

  return (
    <ListCategoriesStyled
      selected={category === selectedCategory}
      onClick={() => dispatch(selectCategory(category))}
    >

      <CategoryStyled>{title}</CategoryStyled>

    </ListCategoriesStyled>
  )
}

export default Categoria
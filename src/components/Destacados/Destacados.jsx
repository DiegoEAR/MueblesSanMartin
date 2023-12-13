import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import products from '../../data/Products'

const carrouselSX = {
  width: "80%",
  padding: "1rem",
  maxWidth: '1400px'
}

function Destacados(){

  const c = 6 
  let a = Math.random() * ((products.length - c) - 1) + 1;
  let b = a + c;

  return (
    <Carousel sx={carrouselSX}>
      {
        products.slice(a, b).map( item => ( <Item key={item.id} item={item} /> ))
      }
    </Carousel>
  )
}

export default Destacados
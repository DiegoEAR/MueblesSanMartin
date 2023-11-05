import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import itemsCarousel from '../../data/carouselData.json'

function Destacados(){

  return (
    <Carousel sx={{width: "80%", padding: "1rem",}}>
      {
        itemsCarousel.map( item => <Item key={item.id} item={item} /> )
      }
    </Carousel>
  )
}

export default Destacados
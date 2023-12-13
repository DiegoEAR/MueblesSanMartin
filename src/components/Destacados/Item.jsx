import { CarouselContainerStyled, TitleContainerStyled, ImgCarrouselStyled, TextContainerStyled, ButtonStyled, PriceContainerStyled} from './DestacadosStyles'
import { motion } from 'framer-motion'

function Item({item}){

  return (

    <CarouselContainerStyled>
      <TextContainerStyled>
        <TitleContainerStyled>
          <h2>{item.title}</h2>

          <div>
            <p>•Categoria: {item.category}</p>
          </div>

        </TitleContainerStyled>
        <PriceContainerStyled>
          <span>Precio: {item.price}</span>
          <motion.div whileTap={{scale: 0.95}}>
            <ButtonStyled>MAS INFO!</ButtonStyled>
          </motion.div>
        </PriceContainerStyled>        

      </TextContainerStyled>
      <ImgCarrouselStyled src={item.image} alt={item.title}/>
    </CarouselContainerStyled>

  )
}

export default Item
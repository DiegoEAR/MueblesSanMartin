import React from 'react';
import { BgImgStyled, ImgFrente, InfoNosotrosContainerStyled, NosotrosContainerStyled, TextoNosotrosStyled, TextoPrincipalStyled, TitleContainerStyled } from './NosotrosStyles';
import IntroNosotros from '../IntroNosotros/IntroNosotros';

const Nosotros = () => {
  return (
    <>
      <NosotrosContainerStyled>
        <BgImgStyled  />
        <TitleContainerStyled>
          <h2>NOSOTROS</h2>
        </TitleContainerStyled>
      </NosotrosContainerStyled>

      <InfoNosotrosContainerStyled>

        <TextoPrincipalStyled>
          Somos una empresa Argentina, dedicada a la comercializacion de muebles para el hogar.
        </TextoPrincipalStyled>

        <TextoNosotrosStyled>
          Contamos con mas de 10 años de experiencia en el rubro, lo que nos permite ofrecer una amplia variedad de muebles para el hogar, funcionales y de buen diseño, al mejor precio y accesibles para todos.
        </TextoNosotrosStyled>

        <TextoNosotrosStyled>
          Brindamos atención personalizada en cada caso, y ayudamos a nuestros clientes a encontrar la opcion que mejor se adapte a sus necesidades. En nuestro local podrán encontrar muebles para la cocina, el living, para el dormitorio, amoblamientos infantiles, sillones, colchones y sommiers, ademas de mesas y sillas con combos excelentes!
        </TextoNosotrosStyled>

        <TextoNosotrosStyled>
          Buscamos destacar contando con una amplia variedad de articulos, a muy buen precio, con atención al cliente basada en la transparencia, la confianza, y el buen servicio. Tenemos opciones de retirar los muebles, armados, desarmados, y podemos ofrecer entregas con fletes de confianza (consultar precios).
        </TextoNosotrosStyled>

        <ImgFrente src='/localFrente.jpg'/>

      </InfoNosotrosContainerStyled>

      <IntroNosotros/>
    </>
  )
}

export default Nosotros
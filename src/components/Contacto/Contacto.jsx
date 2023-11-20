import React from 'react';
import { FormInputContainer, FormStyled, ButtonFormStyled } from './ContactoStyles';

const Contacto = () => {
  return (
    <>
      <FormStyled>

        <h2>Envianos tu consulta!</h2>

        <FormInputContainer>
          <label htmlFor="nombre">Nombre: </label>
          <input type="text" id="nombre" placeholder='  Juan Martinez'/>
        </FormInputContainer>

        <FormInputContainer>
          <label htmlFor="telefono">Telefono: </label>
          <input type="text" id="telefono" placeholder='  1122334455'/>
        </FormInputContainer>

        <FormInputContainer>
          <label htmlFor="email">Email: </label>
          <input type="mail" id="email" placeholder='  email@example.com'/>
        </FormInputContainer>

        <FormInputContainer>
          <label htmlFor="asunto">Asunto: </label>
          <textarea name="" id="asunto"></textarea>
        </FormInputContainer>

        <ButtonFormStyled>Enviar</ButtonFormStyled>
      </FormStyled>
    </>
  )
}

export default Contacto
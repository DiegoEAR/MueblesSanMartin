import React from 'react'
import { ErrorStyled, FormInputContainer, LabelStyled } from '../Input/InputStyled'
import { TextareaStyled } from './TextareaStyle'

const Textarea = ({name, label, type, isError, ...field}) => {
  return (
    <FormInputContainer>
      <LabelStyled 
      htmlFor={label}
      > {label} </LabelStyled>

      <TextareaStyled
      error={isError}
      name={name}
      type={type}
      id={label}
      {...field}
      />

      {isError && <ErrorStyled>{isError}</ErrorStyled>}
    </FormInputContainer>
  )
}

export default Textarea
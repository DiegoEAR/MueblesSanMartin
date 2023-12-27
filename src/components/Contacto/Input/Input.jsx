import React from 'react'
import { ErrorStyled, FormInputContainer, InputStyled, LabelStyled } from './InputStyled'

const Input = ({name, label, type, isError, ...field}) => {
  return (
    <FormInputContainer>
      <LabelStyled 
      htmlFor={label}
      > {label} </LabelStyled>

      <InputStyled
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

export default Input;

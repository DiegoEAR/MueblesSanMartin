import styled from "styled-components";


export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 80%;
`

export const InputStyled = styled.input`
  width: 100%;
  height: 30px;
  background-color: var(--background);
  border-radius: 1rem;
`

export const LabelStyled = styled.label`
  width: 100%;
  @media (max-width: 903px){
    font-size: 22px;
}
`

export const ErrorStyled = styled.span`
  padding-left: 1rem;
  color: var(--secondary);
  font-size: 12px;
`
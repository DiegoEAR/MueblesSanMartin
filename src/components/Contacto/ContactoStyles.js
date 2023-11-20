import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  width: 50vw;
  margin-top: 60px;
  padding: 2rem;
  background-color: var(--sdt);
  border: 1px solid var(--secondary);
  border-radius: 1rem;
  gap: 10px;
`

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 80%;


  label{
    width: 100%;
  }

  input{
    width: 100%;
    height: 30px;
    background-color: var(--background);
    border-radius: 1rem;
  }

  textarea{
    height: 60px;
    width: 100%;
    max-width: 100%;
    background-color: var(--background);
    border-radius: 1rem;
  }
`

export const ButtonFormStyled = styled.button`
  width: 150px;
  height: 60px;
  background-color: var(--background);
  border-radius: 1rem;
  font-size: 30px;
  font-weight: 500;
  cursor: pointer;
  border: 0.5px solid var(--secondary);
  margin-top: 10px;
`
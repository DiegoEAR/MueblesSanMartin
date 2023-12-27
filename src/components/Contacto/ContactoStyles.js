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

  @media (max-width: 903px) {
    width: 80%;
    padding: 1rem;
  }

  h2{
    @media (max-width: 903px) {
    font-size: 26px;
    text-align: center;
    
  }
  }
`
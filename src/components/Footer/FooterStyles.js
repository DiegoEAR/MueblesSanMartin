import styled from "styled-components";

export const FooterContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    bottom: 0;
    width: 100%;
    height: 110px;
    margin-top: 50px;
    background-color: var(--primary);
    padding-top: 1rem;
`
export const FooterSignContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    p {
        font-size: 24px;
    }

    span {
        text-shadow: 2px 2px 3px white;
        font-size: 28px;
    }
`

export const FooterLinksStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;


    a {
        cursor: pointer;
        color: black;
    }
`
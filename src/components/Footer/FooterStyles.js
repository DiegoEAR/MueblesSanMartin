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
    position: relative;

		@media (max-width: 720px) {
			height: 25vh;
    }
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

    @media (max-width: 720px) {
        flex-direction: column;
		gap: 1px;
		justify-content: center;
		align-items: center;
		height: 100%;
    }


    a {
        cursor: pointer;
        color: black;
    }
`
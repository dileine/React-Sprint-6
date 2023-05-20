import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const EscenaText = styled.div`
margin: 70px 60px;
padding: 5px;
font-size: 1.5rem;
text-align: center;
background-color: rgba(255, 255, 255, 0.5);
border: 0.15rem solid #000;
border-radius: 3rem;


&.activeScene {
    background-color:pink;
}
`;

export const BackgroundScene = createGlobalStyle `
body{
    background-image: url(${({img})=>img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

`




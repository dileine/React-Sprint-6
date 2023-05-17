import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
//import benvinguda from "../../assets/img/benvinguda.png";
import space1 from "../../assets/img/space1.jpg";


export const StyledWelcome = styled.div `
padding: 2rem;  
margin: 4rem;
`

export const ContainerText = styled.div `
padding. 4rem;
text-align: center;
border: 0.1rem solid pink;
border-radius: 2rem;

& h1 {
    font-family: Mono;
color: pink;
}

& p { 
    font-family: Mono;
    margin: 2.5rem;                                                 
    color: white;
    font-size: 1.5rem;
}

& button {
    font-size: 2rem;
    margin: 2rem;
    padding:2rem;
    background: none;
    color: pink;
    border: none;
   
    cursor: pointer;
}

`

export const StyledBackground = createGlobalStyle `
body{
    background-image: url(${space1});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

`
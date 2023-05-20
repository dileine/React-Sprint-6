import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import space1 from "../../assets/img/space1.jpg";


export const StyledWelcome = styled.div `
padding: 10px;  
margin: 80px;
`

export const ContainerText = styled.div `
padding:10px;
text-align: center;
border: 0.1rem solid pink;
border-radius: 2rem;

& h1 {
    font-family: Mono;
color: pink;
}

& p { 
    font-family: Mono;
    margin:30px;                                                 
    color: white;
    font-size: 1.5rem;
}

& button {
    font-size: 2rem;
    margin: 30px;
    padding: 15px;
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
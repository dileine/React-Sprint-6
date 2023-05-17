import React from "react";
import { StyledWelcome, ContainerText } from "./Styled-welcome";

export const Welcome = ({startScene}) => {

    return <StyledWelcome>  
    <ContainerText>
     <h1>Benvingut a l'Sprint6</h1>
     <p>En aquest lliurament posarem en pràctica els conceptes bàsics que has après de React. 
        Un/a client/a que té com a producte principal una web de gestió empresarial desenvolupada amb React, 
        ens ha demanat que desenvolupem un tutorial, en el qual mitjançant dos botons els nous usuaris puguin
         avançar i retrocedir en els consells, modificant-se el text d'ajuda i la imatge de fons. 
    </p>
    <button onClick={startScene}>Comencem!</button>
    </ContainerText>
        </StyledWelcome>
    

}

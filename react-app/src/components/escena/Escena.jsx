import React from "react";
import { EscenaText } from "./Styled-Escena";


export const Escena = ({isActive, text}) => {
   
    return    <EscenaText className={isActive ? "activeScene" : ""}>
        <p>{text}</p>
    </EscenaText>
}


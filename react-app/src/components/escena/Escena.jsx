import React from "react";
import { EscenaText } from "../styled/Styled";


export const Escena = ({text}) => {
   
    return  <EscenaText className="EscenaText">
        <p>{text}</p>
    </EscenaText>
}


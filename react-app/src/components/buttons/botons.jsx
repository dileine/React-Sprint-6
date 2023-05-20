import React from "react";
import { ContainerButtons, Button } from "./Styled-buttons";

export const Buttons = ({previous, next}) => {
    return <ContainerButtons>
       <Button onClick={previous}> Anterior </Button>
       <Button onClick={next}> Següent</Button>
    </ContainerButtons>
}
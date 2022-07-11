import React from 'react'
import imagemHome from "../img/img1.png"
import styled from "styled-components"

export const ConjuntoHome = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;

`
export const Botao = styled.button`
 display: flex;
 flex-direction: column;
 margin: 20px;
 padding: 10px;

`
function HomePage() {
  return (
    <ConjuntoHome> 
        <img src={imagemHome} alt={"logo alien"} width="500px" />
      
       <div>
        <Botao>ir para viagens</Botao>
        <Botao>fazer login</Botao>
       </div>
        
    </ConjuntoHome>
  )
}

export default HomePage
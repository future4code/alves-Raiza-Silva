import React from 'react'
import imagemHome from "../img/img1.png"
import styled from "styled-components"
import {useNavigate} from "react-router-dom"
import {goToListTripsPage, goTologin} from "../Routes/coordenita"

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
   const navigate = useNavigate()
  
 


  return (
    <ConjuntoHome>
      <img src={imagemHome} alt={"logo alien"} width="500px" />

      <div>
        <Botao onClick={()=>goToListTripsPage(navigate)}>ir para viagens</Botao>
        <Botao onClick={()=>goTologin(navigate)}>fazer login adm</Botao>
      </div>

    </ConjuntoHome>
  )
}

export default HomePage
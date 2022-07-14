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
     <figure><img src={imagemHome} alt={"logo alien"} width="380px" /></figure> 

      <div>
        <Botao onClick={()=>goToListTripsPage(navigate)}> <span>ir para viagens</span></Botao>
        <Botao onClick={()=>goTologin(navigate)}>fazer login adm</Botao>
      </div>

    </ConjuntoHome>
  )
}

export default HomePage
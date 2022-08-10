import React from 'react'
import imagemHome from "../img/img1.png"
import { ConjuntoHome, ConjuntoB, Botao } from "../styledPages/styled"
import { useNavigate } from "react-router-dom"
import { goToListTripsPage, goTologin } from "../Routes/coordenita"



function HomePage() {
  const navigate = useNavigate()




  return (
    <ConjuntoHome>
      <figure><img src={imagemHome} alt={"logo alien"} width="550px" /></figure>

      <ConjuntoB>
        <Botao onClick={() => goToListTripsPage(navigate)}> Viagens</Botao>
        <Botao onClick={() => goTologin(navigate)}>Fazer login</Botao>
      </ConjuntoB>

    </ConjuntoHome>
  )
}

export default HomePage
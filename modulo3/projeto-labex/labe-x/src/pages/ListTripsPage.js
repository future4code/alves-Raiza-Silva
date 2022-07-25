import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { goBack, goApplicationFormPage } from "../Routes/coordenita"
import axios from "axios"
import {ConjuntoTrips, ConjuntoConteiner,BotaoTrips } from "../styledPages/styled"




function ListTripsPage() {
  const navigate = useNavigate()
  const [trips, setTrips] = useState([])


  const GetTrips = (() => {
    axios.
      get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/raiza-gomes-alves/trips" //colocar id=

      )
      .then((response) => {
        setTrips(response.data.trips)
      })

      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  })
  useEffect(() => {
    GetTrips()
  }, [])

  const renderList = trips.map((list => {
    return (
      <ConjuntoTrips key={list.id}>{list.name}
        <p>{list.planet}</p>
        <p>{list.date}</p>
        <p>{list.description}</p>
        <p>{list.durationInDays}</p>

      </ConjuntoTrips>

    )
  }))

  return (
    <ConjuntoConteiner>
      <h1>Para vermos todas as viagens</h1>
      
      <BotaoTrips onClick={() => goBack(navigate)}>Voltar</BotaoTrips>
      <BotaoTrips onClick={() => goApplicationFormPage(navigate)}>Inscreve-se</BotaoTrips>
      
      
      {renderList}
    </ConjuntoConteiner>

  )

}

export default ListTripsPage
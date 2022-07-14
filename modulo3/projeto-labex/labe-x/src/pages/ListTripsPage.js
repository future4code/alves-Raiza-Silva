import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { goBack, goApplicationFormPage } from "../Routes/coordenita"
import axios from "axios"
import styled from "styled-components"


const ConjuntoTrips = styled.div`
    border: 1px solid green;
    padding: 10px;
    background: darkseagreen;
    color: white;
    font-family: monospace;
    margin: 20px;
    border: none;
    border-radius: 10px;
    box-shadow: 10px 10px #00000096;
    width: 50%;

`
const ConjuntoConteiner =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const BotaoTrips =styled.button`
    border: none;
    display: flex;
    padding: 10px;
    margin: 20px;
    border-radius: 15px;

`

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
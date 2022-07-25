import React from 'react'
import {useNavigate,useParams } from "react-router-dom"
import { goTologin, goToCreateTripPage,} from "../Routes/coordenita"
import { useEffect,useState } from "react";
import axios from 'axios';
import { ConjuntoTripsAdm,ConjuntoAdm, BotaoAdm, BotaoA } from "../styledPages/styled"




function AdminHomePage() {
  const [trips, setTripsList] = useState([])
  let navigate = useNavigate()
  const params = useParams()
  
  const getTrips = () => {
    axios
      .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/raiza-gomes-alves/trips')
      .then(res => {
        console.log(res)
        setTripsList(res.data.trips)
      })
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
    } else {
      navigate('/login')
    }
    getTrips()
  }, [])
  
  const renderTrips = trips.map((item) => {
    return <ConjuntoTripsAdm key={item.id}>{item.name}</ConjuntoTripsAdm>
  })

  

  return (
    <div>

      <ConjuntoAdm>
        <h3> Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</h3>
       < BotaoA>
        < BotaoAdm onClick={()=> goTologin(navigate)}>voltar</ BotaoAdm>
        < BotaoAdm onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</ BotaoAdm>
        < BotaoAdm onClick={()=>(navigate)}>Loungt</ BotaoAdm>
       </ BotaoA>
        
        <p>{renderTrips}</p>
       
      </ConjuntoAdm>
    </div>
  )
}

export default AdminHomePage
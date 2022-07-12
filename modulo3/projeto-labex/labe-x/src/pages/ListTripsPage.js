import React from "react"
import {useNavigate} from "react-router-dom"
import {goBack, goApplicationFormPage} from "../Routes/coordenita"

function ListTripsPage() {
  const navigate = useNavigate()
  
  return (
    <div>
      <h1>Para vermos todas as viagens</h1>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
      <button onClick={()=>goApplicationFormPage(navigate)}>Inscreve-se</button>
    </div>
  )
}

export default ListTripsPage
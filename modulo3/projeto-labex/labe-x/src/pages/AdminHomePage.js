import React from 'react'
import {useNavigate} from "react-router-dom"
import {goBack, goToCreateTripPage} from "../Routes/coordenita"

function AdminHomePage() {
 const navigate = useNavigate()
 


  return (
    <div>

      <div>
        <h3> Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</h3>
        <button onClick={()=>goBack(navigate)}>voltar</button>
        <button onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</button>
        <button onClick={()=>(navigate)}>Loungt</button>
        
      </div>
    </div>
  )
}

export default AdminHomePage
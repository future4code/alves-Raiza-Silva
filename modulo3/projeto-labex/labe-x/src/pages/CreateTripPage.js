import React from 'react'
import { goBack } from "../Routes/coordenita"
import { useNavigate } from "react-router-dom"


function CreateTripPage() {
  const navigate = useNavigate()
  return (
    <div>Formulário para o administrador criar uma nova viagem
      <button onClick={() => goBack(navigate)}>voltar</button>
      <button>Criar</button>
    </div>
  )
}

export default CreateTripPage
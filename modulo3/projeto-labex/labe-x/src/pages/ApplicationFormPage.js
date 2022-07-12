import React from 'react'
import {useNavigate} from "react-router-dom"
import {goBack} from "../Routes/coordenita"

function ApplicationFormPage() {
    const navigate = useNavigate()
  
    return (
             <div>
                  <h1>Página do formulário de inscriçãoe</h1>
                  <button onClick={()=>goBack(navigate)}>Voltar</button>
                  <button>Enviar</button>
           </div>
  )
}

export default ApplicationFormPage
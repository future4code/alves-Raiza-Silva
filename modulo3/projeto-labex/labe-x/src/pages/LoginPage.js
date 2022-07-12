import React from 'react'
import {goBack, goTologin} from "../Routes/coordenita"
import {useNavigate} from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()
  return (
    <div>
       
            <main>
                    <h1>login como administrador</h1>
                   <div>
                    <input type="text" 
                     placeholder='Email'/>
                    <input type="text"
                     placeholder='senha'/>
                   </div>

                 <div>
                    <button onClick={()=>goBack(navigate)}>voltar</button>
                    <button onClick={()=>goTologin(navigate)}>enviar</button>
                </div>
           

           </main>
    </div>
  )
}

export default LoginPage
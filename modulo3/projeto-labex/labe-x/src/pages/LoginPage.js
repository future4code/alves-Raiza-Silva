import React, { useState } from 'react'
import { goBack } from "../Routes/coordenita"
import { useNavigate, } from "react-router-dom"
import axios from "axios"



  function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const navigate = useNavigate()

        const goSubmitLogin=()=>{
                     const body = {
                        email:email,
	                         password:password
                      }
                       axios.
                          post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/raiza-gomes-alves/login",
                           body
                           ).then((response) => {
              
                            localStorage.setItem("token", response.data.token);
                            navigate.push("/tripDetails");
                          
                           })
                           .catch((error) => {
                            console.log("ERRO: ", error.response);
                          });
                        }

       
        return (
        
        <div>

             <main>
                  <h1>login como administrador</h1>
                     <div>
                           <input
                                  placeholder="email"
                                  type="email"
                                  value={email}
                                  onChange={onChangeEmail} />
                           <input
                                  placeholder="password"
                                  type="password"
                                  value={password}
                                  onChange={onChangePassword} />
                      </div>

                       <div>
                           <button onClick={() => goBack(navigate)}>voltar</button>
                           <button onClick={goSubmitLogin} >enviar</button>
                       </div>


              </main>
    </div>
  )
}

export default LoginPage
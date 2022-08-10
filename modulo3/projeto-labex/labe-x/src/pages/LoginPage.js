import React, { useState } from 'react'
import { goToHomePage, goToAdmHomePage } from "../Routes/coordenita"
import { useNavigate, } from "react-router-dom"
import axios from "axios"
import {  MainConjunto,FormLogin,Inputs,Botao2,H1, ConjuntoBotoes } from "../styledPages/styled"



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

  const goSubmitLogin = (event) => {
    event.preventDefault()
    const body = {
      email: email,
      password: password
    }
    axios.
      post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/raiza-gomes-alves/login",
        body
      ).then((res) => {
        console.log("Deu Certo", res.data)
        localStorage.setItem('token', res.data.token)
        goToAdmHomePage(navigate)

      })
      .catch((error) => {
        console.log("ERRO: ", error.response);
      });
  }


  return (

    <div>

      <MainConjunto>
        <H1 >login como administrador</H1 >
        <FormLogin onSubmit={goSubmitLogin}>
          <Inputs
            placeholder="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            required />
          <Inputs
            placeholder="password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required />

         
          <ConjuntoBotoes>
            <Botao2 >login</Botao2>
            <Botao2 onClick={() => goToHomePage(navigate)}>voltar</Botao2>
            
          </ConjuntoBotoes>

        </FormLogin>




      </MainConjunto>
    </div>
  )
}

export default LoginPage
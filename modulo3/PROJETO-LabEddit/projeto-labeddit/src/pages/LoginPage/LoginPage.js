import React from 'react'
import { useForm } from '../../hooks/useForm'
import {  goToFeedPage,goToCadastroPage } from '../../routes/cordination' 
import { useNavigate} from 'react-router-dom'
import { BASE_URL } from '../../contants/urls'
import axios from 'axios'
import { ScreenConteiner,InputConteiner, LogoImg ,ConjuntoCadastro} from '../../components/styled'
import logo from "../../assets/Logo.svg"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
//import { colorPrimary } from '../../contants/coloors'

const LoginPage = () => {
 
  const { form, onChange, clean } = useForm({ email: "", password: "" })

  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clean, navigate)
  }


  const login = (body, clean, navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
             goToFeedPage(navigate)
            clean()
        }).catch((error) => {
            alert("Usuário ou senha inválidos")
            console.log(error.response)
            clean()
        })
}


  return (
    <ScreenConteiner>
       <LogoImg src={logo}/>

      <form onSubmit={onSubmitForm}>
        <InputConteiner>
          <TextField
          
          name="email"
          type="email"
          onChange={onChange}
          value={form.email}
          placeholder="E-mail *"
          required
          variant={"outlined"}
          fullWidth
          margin={'normal'}
          />
          <TextField
          name="password"
          type="password"
          onChange={onChange}
          value={form.password}
          placeholder="Senha *"
          required
          variant={"outlined"}
          fullWidth
          />
          
        </InputConteiner>
        <InputConteiner>
          <Button 
          fullWidth
          variant={"contained"}
          color={"primary"}
          type="submit">Continuar</Button>
        </InputConteiner>
        
      </form>
      
      <ConjuntoCadastro>
        <Button 
        type={"submit"}
        variant={"Text"}
        fullWidth
        color={"primary"}
        onClick={() => goToCadastroPage(navigate)}>Crie uma conta!</Button>
      </ConjuntoCadastro>
    

    </ScreenConteiner>
  )
}

export default LoginPage 
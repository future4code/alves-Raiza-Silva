//import { TextField } from '@material-ui/core'
import React from 'react'
import {useNavigate} from "react-router-dom"
import { ScreenContainer, Input } from "../pages/styled"
import Button from '@material-ui/core/Button'
import LoginForm from './LoginForm'
import { goTocadastro } from '../routes/coordinator/Coordinator'



function LoginPage() {
 
const navigate= useNavigate()

  return (
    <ScreenContainer>
      <LoginForm/>

      <div>
        <Button 
         onClick={()=> goTocadastro(navigate)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={'primary'}
        >

          não possui conta? cadastra-se agora
        </Button>
      </div>
    </ScreenContainer>
  )
}

export default LoginPage
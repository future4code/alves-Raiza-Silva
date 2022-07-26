import { TextField } from '@material-ui/core'
import React from 'react'
import useForm from '../hooks/useForm'
import {ScreenContainer, Input} from "../pages/styled"
import Button from '@material-ui/core/Button'
import axios from "axios"
import {BASE_URL} from "../contants/urls"
import { goToPost } from '../routes/coordinator/Coordinator'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const [form, clear,onChange] = useForm({email:"", password: ""})
  const navigate = useNavigate()



const onSubmitForm = (event) => {
    
    event.preventDefault()
    axios.post(`${BASE_URL}/users/login`, form)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        goToPost(navigate)
        clear()
      }).catch((error) => {
        alert("erro")
        console.log(error.response)
        clear()
      })
  }
  
  return ( <div>
                 
                       <h1>Login</h1>
                    
                          <form onSubmit={onSubmitForm}>
                                  
                                  < Input
                                   name={"email"}
                                   defaultValue={form.email}
                                   label={"email"}
                                   required
                                   onChange={onChange}
                                   fullWidth
                                   
                                   type={"email"}
                                  />

                                  < Input
                                   name={"password"}
                                   defaultValue={form.password}
                                   onChange={onChange}
                                   label={"password"}
                                   required
                                   
                                   fullWidth
                                   type={'password'}
                                  />
                                  
                                  <Button
                                  type={"submit"}
                                  fullWidth
                                  variant={"contained"}
                                  color={'primary'}
                                  margin={"normal"}
                                  >Fazer login</Button>
                          </form>
                          
     
                      
    
     </div> )
}

export default LoginForm
import { TextField } from '@material-ui/core'
import React from 'react'
import useForm from '../hooks/useForm'
import {ScreenContainer, Input} from "../pages/styled"
import Button from '@material-ui/core/Button'

function CadastroPage() {
  const [form, clear,onChange] = useForm({username:"" ,email:"", password: ""})
  




  const onSubmitForm = (event)=>{
    console.log(form)
    event.preventDefault()
    
  }
  
  return ( <div>
                 
                       <h1>CADASTRO</h1>
                    
                          <form onSubmit={onSubmitForm}>
                          < Input
                                   name={"username"}
                                   defaultValue ={form.email}
                                   onChange={onChange}
                                   label={"name"}
                                   required
                                   variant={"outlined"}
                                   fullWidth
                                   margin={"normal"}
                                   type={"username"}
                                  />

                                  < Input
                                   name={"email"}
                                   defaultValue ={form.email}
                                   onChange={onChange}
                                   label={"email"}
                                   required
                                   variant={"outlined"}
                                   fullWidth
                                   margin={"normal"}
                                   type={"email"}
                                  />

                                  < Input
                                   name={"password"}
                                   defaultValue={form.password}
                                   onChange={onChange}
                                   label={"password"}
                                   required
                                   variant={"outlined"}
                                   fullWidth
                                   type={'password'}
                                  />
                                  
                                  <Button
                                  type={"submit"}
                                  fullWidth
                                  variant={"contained"}
                                  color={'primary'}
                                  margin={"normal"}
                                  >Cadastrar</Button>
                          </form>
                          
     
                      
    
     </div> )
}

export default CadastroPage
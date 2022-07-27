import React from "react"
import { goToPostPage } from '../../routes/cordination'
import { useNavigate} from 'react-router-dom'
import { BASE_URL } from '../../contants/urls'
import axios from 'axios'
import { useForm } from '../../hooks/useForm'



 const CadastroPage = () =>{
const { form, onChange, clean } = useForm({ email: "", password: "", usename:"" })

    const navigate = useNavigate()
  
    const onSubmitForm = (event) => {
      event.preventDefault()
      signUp(form, clean, navigate)
    }
  
  
    const signUp = (body, clean, navigate) => {
        axios.post(`${BASE_URL}/users/signup`, body)
          .then((response) => {
            localStorage.setItem('token', response.data.token)
            goToPostPage(navigate)
            clean()
          }).catch((error) => {
            alert("Tente novamente")
            console.log(error.response)
            clean()
          })
      } 
  
    return (
      <>
        
        <div>
        <h2>seja bem vindo </h2>
      </div>
      <form onSubmit={onSubmitForm}>
        <div>
        <input
            name="username"
            type="text"
            onChange={onChange}
            value={form.username}
            placeholder="Nome de usuário *"
            required
          />
          <input
            name="email"
            type="email"
            onChange={onChange}
            value={form.email}
            placeholder="E-mail *"
            required
          />
          <input
            name="password"
            type="password"
            onChange={onChange}
            value={form.password}
            placeholder="Senha *"
            pattern={'^.{8,30}'}
            title={"A senha deve conter no mínimo 8 e no máximo 30 caracteres"}
            required
          />
        </div>
        <div>
        <p>Ao continuar, você concorda com o nosso Contrato de Usuário e nossa Política de Privacidade.</p>
        <check>
        <input type="checkbox"/>
        <p>Eu concordo em receber emails sobre coisas legais no LabEddit</p>
        </check>
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </>
  )
}
  

export default CadastroPage
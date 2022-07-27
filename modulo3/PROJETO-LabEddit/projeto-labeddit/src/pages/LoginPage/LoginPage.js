import React from 'react'
import { useForm } from '../../hooks/useForm'
import { goToPostPage,goToCadastroPage } from '../../routes/cordination' 
import { useNavigate} from 'react-router-dom'
import { BASE_URL } from '../../contants/urls'
import axios from 'axios'



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
            goToPostPage(navigate)
            clean()
        }).catch((error) => {
            alert("Usuário ou senha inválidos")
            console.log(error.response)
            clean()
        })
}


  return (
    <>
      
      <div>
        <p>rede social labenu</p>
      </div>
      <form onSubmit={onSubmitForm}>
        <div>
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
            required
          />
        </div>
        <div>
          <button type="submit">Continuar</button>
        </div>
      </form>
      
      <>
        <button onClick={() => goToCadastroPage(navigate)}>Crie uma conta!</button>
      </>
    </>
  )
}

export default LoginPage 
import React from "react"
import axios from "axios"

 export default class TelaCadastro extends React.Component {
     state ={
        emailUser: "",
        usuarioUser:"",
     }

     onChangeNameUser =(event) =>{
        this.setState({usuarioUser: event.target.value}) // atualiza o nome que foi colcoado no estado
      }

      onChangeEmailuser =(event) =>{
        this.setState({emailUser: event.target.value}) // atualiza o nome que foi colocado no estado
      }


      adicionarUsuario = () =>{
        const body = {
            name:this.state.usuarioUser,
            email:this.state.emailUser
            }
            axios.post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
               body,
                {
                  headers:{ 
                    
                    Authorization: 'Raiza-Gomes-alves'
                }})
                .then((resposta) => {
                  alert("usuario cadastrado");
                })
                .catch((erro) => {
                  alert(erro.response.data.message);
                });
      
      };
      
  
    render(){
    
    return(
        <div>  
        <button onClick={this.props.irParaLista}>ir para lista de cadastro</button>
        <label>Nome de usuario</label>
        <input value={this.state.usuarioUser} onChange={this.onChangeNameUser} placeholder="Usuario"/>
        <label>Email do usuario</label>
        <input value={this.state.emailUser} onChange={this.onChangeEmailuser} placeholder="Email"/>
        <button onClick={this.adicionarUsuario}>avançar</button> 
        
        </div>
    )
  

}
}
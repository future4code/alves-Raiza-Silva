import React from "react"
import axios from "axios"
import styled from "styled-components"

const InputStyled = styled.input`
 display: flex;
 width: 33vw;
 padding: 2px;
 margin: 10px;
 border-radius: 10px;
 border: none;
 margin: 10px;

`
const Label = styled.label`
    color: white;
    font-size: 13px;   
    
`

const ContainerDiv= styled.div `
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30%;
    margin: 20px;
    border: 2px orange solid;
    background: orange;
    font-family: sans-serif;
    font-size: 15px;
    height: 30vw;
    width: 40vw;
    border-radius: 20px;
    

`

const Botao = styled.button`
    border: none;
    color: orange;
    font-size: 10px;
    border-radius: 10px;
    padding: 5px;
    margin: 10px;

`

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
        <ContainerDiv>  
        
        <Label>Nome de usuario</Label>
        <InputStyled value={this.state.usuarioUser} onChange={this.onChangeNameUser} placeholder="Usuario"/>
        <Label>Email do usuario</Label>
        <InputStyled value={this.state.emailUser} onChange={this.onChangeEmailuser} placeholder="Email"/>
        < Botao onClick={this.adicionarUsuario}>Confirma cadastro</ Botao> 
         < Botao onClick={this.props.irParaLista}>Ir para Cadastro</ Botao>
        </ContainerDiv>
    )
  

}
}
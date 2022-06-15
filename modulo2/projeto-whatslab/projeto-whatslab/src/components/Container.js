import React from 'react';
import react from 'react'
import styled from 'styled-components';

export const ContainerStyled = styled.div `
 height: 75vh;
 border: 1px black solid;
 box-sizing: border-box;
 background: Grey;

 
 `
const Quadro = styled.div `
 border: 1px black solid;
 display: inline-block;
 
`
const InputUsuario =styled.input `
width: 100px;
`
const InputMsg = styled.input `
width: 50vh;

`

export default class Conteiner extends React.Component{
   state = {
    mensagens: [
        {
            nome: "",
            mensagem: ""

        }
    ],
    valorName:"",
    valorMensagem:""

   }

   enviar = ()=> {
    const novaMsg = {
        nome: this.state.valorName,
        mensagem:this.state.valorMensagem
    }
    const novaMsgDois= [...this.state.mensagens, novaMsg]

    this.setState({
        mensagens: novaMsgDois,
        valorName:"",
        valorMensagem: ""


    })
   }

   onChangeInputUsuario= (event)=>{
    this.setState({valorName: event.target.value})
   }
  

   onChangeInputMsg= (event)=>{
    this.setState({valorMensagem: event.target.value})
   }
  
    render (){
            const listDeMsg = this.state.mensagens.map((chat, indice)=>{
                return <div key={indice}>
                    <p>{chat.nome}</p>
                    <p>{chat.mensagem}</p>

                </div>
            }
            )
        return(
           
            <   Quadro>
              
               <div>
                <ContainerStyled >
                    {listDeMsg}
                </ContainerStyled>
                <div>
                <InputUsuario type="text" placeholder='Usuario' value={this.state.valorName} onChange={this.onChangeInputUsuario}/>
                <InputMsg type="text" placeholder='mensagem' value={this.state.valorMensagem} onChange={this.onChangeInputMsg}/>
                <button onClick={this.enviar}> Enviar 
                    <fiSend size={20} />
                </button>
                </div>
               </div>
            </  Quadro>

        
            )
    }
}
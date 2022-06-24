import React from "react"
import TelaCadastro from "./components/TelaCadastro";
import TelaLista from "./components/TelaLista";



export default class App extends React.Component {
   state = {
   trocaTela: "cadastro"  // trocar a tela de cadastro e lista de cadastrado
};

escolheTela= () =>{
  switch(this.state.trocaTela){
    case "cadastro":
      return <TelaCadastro irParaLista={this.irParaLista}/>
    case "lista":
      return <TelaLista irParaCadastro={this.irParaCadastro} />
    default:
      return<div>Tente novamente</div>
  }
}

irParaCadastro= ()=>{
  this.setState({trocaTela: "cadastro"})
}

irParaLista= ()=>{
  this.setState({trocaTela: "lista"})
}


  render(){
   
     return (
      <div>
    {this.escolheTela()}
    
      </div>
    )
  
}

}

  


 
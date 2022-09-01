import React from 'react'
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Etapa4 from './components/Etapa4'


class App extends React.Component {
    state={
      tela: ""
    }
    
    mostraTela =() =>{
      if(this.state.tela === "Etapa1"){
          return <button onClick={()=> this.mudaTela("Etapa1") }>Proxima etapa</button>
      }else if (this.state.tela === "Etapa2"){
        return <Etapa2/>
      } else {
        return <Etapa1/>
      }
    } 

    mudaTela = (telaEscolhida)=>{
      this.setState({tela: telaEscolhida})
    }
    
  render (){

  return (
    <div>
      {this.mostraTela()} 
  
    </div>
  );
}
}

export default App;

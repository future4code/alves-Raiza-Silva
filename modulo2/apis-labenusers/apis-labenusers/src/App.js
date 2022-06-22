import axios from "axios"
import React from "react"

export default class App extends React.Component {
   state = {
   trocaTela:false,  // trocar a tela de cadastro e lista de cadastrado
   emailUser: "",  // email do usuario no momento que ele inserir no input
   usuarioUser:"", // o nome de usuario que vai ser inserido no input
   usuariosCadastrados: [] // essa vai ser a lista onde vai ser quardados os inputs que foram inseridos
};


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


novolist = (e) => {
  this.setState({usuariosCadastrados: e.target.value });
};


componentDidMount() {
  this.pegarUsuario();
}

pegarUsuario = () => {
   
  axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: 'Raiza-Gomes-alves'
        }
      }
    )
    .then((resposta) => {
      console.log(resposta);
    })
    .catch((erro) => {
      alert(erro.response.data.message);
    });
};



  render(){
    let telaDeCadastro  
    if(this.state.trocaTela === false){
       telaDeCadastro =
      <div>
        <label>Nome de usuario</label>
        <input value={this.state.usuarioUser} onChange={this.onChangeNameUser} placeholder="Usuario"/>
        <label>Email do usuario</label>
        <input value={this.state.emailUser} onChange={this.onChangeEmailuser} placeholder="Email"/>
        <button onClick={this.adicionarUsuario}>avançar</button> 
      </div>
    } else{
      telaDeCadastro =
      <ul>
      <h2>Usuarios:</h2>
      {this.state. telaDeCadastro.map((usarios)=>{return <li>{usarios.name}
      <button onClick={()=>this.removerUser(usarios.id)}>remover</button>
      
      </li>})}

      </ul>
    }
     return (
      <div>
    {telaDeCadastro}
      </div>
    )}

}

  


 
import React from "react"
import axios from "axios"

 export default class TelaLista extends React.Component {

    state={
        usuariosLista: []
    }

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
           this.setState({usuariosLista: resposta.data})
          })
          .catch((erro) => {
            alert(erro.response.data.message);
          });
      };


    deletarUser= ()=> {
        
    }
    
    render(){
        const novaList = this.state.usuariosLista.map((lista) =>{
            return <div key={lista.id}>
                {lista.name}
                <button>x</button>
            
             </div>
        })
     
    return(
        <div>
            <h2>lista usuarios</h2>
             <button onClick={this.props.irParaCadastro}>ir para lista de cadastro</button>
             <input type="text" />

             {novaList}
        </div>
    )
}
}
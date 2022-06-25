import axios from "axios"
import React from "react"
import styled from "styled-components"

const ConteinerAdd = styled.main`
 flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
    align-items: center;
    


`
const Botao = styled.button `
    display: flex;
    margin: 10px;
    border-radius: 20px;
    border: none;
    background: #d427fa80;
    color: white;
    width: 10vw;
    &:hover{
        cursor: pointer;

}
    
    
`
const Input = styled.input`
    display: flex;
    margin: 10px;
    border-radius: 20px;
    border:  #d427fa80 solid;
    color: purple;
    width: 40vw;
`

const ConteinerPlay = styled.div`
    display: flex;
    padding: 5px;
    margin: 10px;
    border: 1px violet solid;
    border-radius: 20px;
    flex-wrap: wrap;
    overflow: auto;


`
const Play = styled.div`
   height: 40vw;
   overflow: scroll;
   width: 70vw;

`

export default class CriarPlayList extends React.Component{
 state ={
   playlistInput : "",
   playlists: [],
}

  onChangeplayList= (event)=>{
    this.setState({playlistInput: event.target.value,})
}
   
criaPlaylist = () => {
    const novaPlaylist = {
      name: this.state.playlistInput
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        novaPlaylist,
        {
          headers: {
            Authorization: "Raiza-Gomes-alves"
          }
        }
      )
      .then((resposta) => {
        resposta.status === 200 && alert("sua playlist foi criada", );
        this.pegarPlaylists();
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  componentDidMount() {
    this.pegarPlaylists();
  }

  pegarPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "Raiza-Gomes-alves"
          }
        }
      )
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((erro) => {
        this.setState({ erro: erro.response.data });
      });
  };
   
    render(){
        const renderizaPlaylist = this.state.playlists.map((playlist)=>{
            return <ConteinerPlay key={playlist.id}>{playlist.name}</ConteinerPlay>
        })
   
        return(
            <div>
            <ConteinerAdd>
              <p>Crie sua playlist</p>
               <Input type="text" 
                      placeholder="crie sua playlist"
                      value={this.state.playlistInput} 
                      onChange={this.onChangeplayList}
               />
               <Botao onClick={this.criaPlaylist}> Criar</ Botao>
               <Play>{renderizaPlaylist}</Play>
            </ConteinerAdd>
              
            </div>
        )
    }
}
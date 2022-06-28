import axios from "axios"
import React from "react"
import { ConteinerAdd, Input, ConteinerPlay, Butao, Play, AlinharBotao } from './styled.js'


export default class CriarPlayList extends React.Component {
  state = {
    playlistInput: "",
    playlists: [],

  }

  onChangeplayList = (event) => {
    this.setState({ playlistInput: event.target.value, })
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
        resposta.status === 200 && alert("sua playlist foi criada",);
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
        console.log(resposta.data.result);
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((erro) => {
        this.setState({ erro: erro.response.data });
      });
  };


  deletarLista = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "Raiza-Gomes-alves"
      }
    })
      .then((res) => {
        alert("Lista deletada")
        this.pegarPlaylists()
      })
      .catch((err) => {
        alert("Erro ao deletar lista")
      })
  }



  render() {
    const renderizaPlaylist = this.state.playlists.map((playlist) => {
      return <ConteinerPlay
        key={playlist.id}
        onClick={() => this.props.telaDetalheMsc(playlist.id)}>
        {playlist.name}
        <Butao
          onClick={() => this.deletarLista(playlist.id)}>deletar</Butao>

      </ConteinerPlay>
    })

    return (
      <div>
        <ConteinerAdd>
          <p>MUSICA PARA TODOS ❤</p>
          <Input type="text"
            placeholder="crie sua playlist"
            value={this.state.playlistInput}
            onChange={this.onChangeplayList}
          />
          < AlinharBotao>
            <Butao onClick={this.criaPlaylist}>Criar</ Butao>

          </ AlinharBotao>

          <Play>{renderizaPlaylist}
            {this.DelDeletePlaylist}
          </Play>
        </ConteinerAdd>

      </div>
    )
  }
}
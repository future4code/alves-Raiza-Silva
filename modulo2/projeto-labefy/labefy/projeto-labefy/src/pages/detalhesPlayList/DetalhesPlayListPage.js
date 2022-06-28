import React from "react"
import axios, { Axios } from "axios"
import styled from "styled-components"
import { BASE_URL } from '../../constants/urls'
import { Titulo, ConteinerMsc, InputMsc, ButaoMsc, PlayMsc, DivList, PlayAudio, } from './styled.js'



export default class DetalhesPlayListPage extends React.Component {
  state = {
    musicas: [],
    titulo: "",
    artista: "",
    url: ""

  }

  componentDidMount() {
    this.PlaylistTrack()
  }
  PlaylistTrack = () => {
    axios.
      get(`${BASE_URL}/${this.props.id}/tracks`,
        {
          headers: {
            Authorization: "Raiza-Gomes-alves"
          }
        }
      )
      .then((resposta) => {
        this.setState({ musicas: resposta.data.result.tracks })
      })
      .catch((erro) => {
        console.log(erro.response.data)
      })
  }

  adicionaTrack = () => {
    const newMusic = {
      name: this.state.titulo,
      artist: this.state.artista,
      url: this.state.url
    }
    axios.
      post(`${BASE_URL}/${this.props.id}/tracks`,
        newMusic,
        {
          headers: {
            Authorization: "Raiza-Gomes-alves"
          }
        }
      )
      .then((resposta) => {
        this.PlaylistTrack()
        this.setState({ titulo: "", artista: "", url: "" })
      })
      .catch((erro) => {
        alert(erro.response.data)
      })
  }
  delTrack = (id) => {
    axios.
      delete(`${BASE_URL}/${this.props.id}/tracks/${id}`,
        {
          headers: {
            Authorization: "Raiza-Gomes-alves"
          }
        }
      )
      .then(() => {
        alert("Música excluida")
        this.PlaylistTrack()
      })
      .catch((erro) => {
        alert(erro.response.data)
      })
  }

  onChangeArtista = (event) => {
    this.setState({ artista: event.target.value })
  }
  onChangeTitulo = (event) => {
    this.setState({ titulo: event.target.value })
  }
  onChangeUrl = (event) => {
    this.setState({ url: event.target.value })
  }
  render() {

    const listDeMusicas = this.state.musicas.map((musica) => {
      return (
        <div>

          <PlayMsc key={musica.id}>
            <p>{musica.artist}</p>
            <p>{musica.name}</p>
            < ButaoMsc onClick={() => this.delTrack(musica.id)}>Apagar</ ButaoMsc>
            <div>
              <PlayAudio ref="audio_tag" src={musica.url} controls />
            </div>
          </PlayMsc>


        </div>



      )
    })

    return (
      <ConteinerMsc>
        <Titulo>Ouça agora suas musicas</Titulo>
        <ButaoMsc onClick={this.props.trocarTelaInical}>Tela inicial</ButaoMsc>
        <div>
          <InputMsc
            value={this.state.artista}
            onChange={this.onChangeArtista}
            placeholder="Digite o artista"
          />
          <InputMsc
            value={this.state.titulo}
            onChange={this.onChangeTitulo}
            placeholder="Digite o título"
          />
          <InputMsc
            value={this.state.url}
            onChange={this.onChangeUrl}
            placeholder="Url MP3"
          />
        </div>
        <ButaoMsc onClick={this.adicionaTrack}>Adicionar Música</ButaoMsc>
        <DivList>{listDeMusicas}</DivList>
      </ConteinerMsc>
    )
  }

}

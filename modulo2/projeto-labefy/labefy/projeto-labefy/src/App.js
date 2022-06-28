import React from "react"
import CriarPlayList from "./pages/criarPlayilist/CriarPlayList"
import Hender from "./components/Hender"
import { Botao, ConteinerMain } from './styled.js'
import background from "./components/img/telaFundo.png"
import DetalhesPlayListPage from "./pages/detalhesPlayList/DetalhesPlayListPage"



export default class App extends React.Component {
  state = {
    telaAtual: "inicial",
    clickDetalhesMsc: ""
  }

  telaDetalheMsc = (id) => {
    this.setState({ telaAtual: "detalhes", clickDetalhesMsc: id })
  }

  trocarTelaInical = () => {
    this.setState({ telaAtual: "inicial", clickDetalhesMsc: "" })
  }


  trocaTela = () => {
    switch (this.state.telaAtual) {
      case "inicial":
        return <CriarPlayList telaDetalheMsc={this.telaDetalheMsc} />
      case "detalhes":
        return <DetalhesPlayListPage trocarTelaInical={this.trocarTelaInical} id={this.state.clickDetalhesMsc} />
      default:
        return <CriarPlayList telaDetalheMsc={this.telaDetalheMsc} />
    }
  }

  render() {
    return (
      <ConteinerMain
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + background})`,
          backgroundRepeat: 'no-repeat',
          width: '100vw'
        }}>
        <Hender />
        {this.trocaTela()}

      </ConteinerMain>

    )
  }
}



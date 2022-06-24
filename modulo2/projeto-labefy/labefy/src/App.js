import React from "react"
import AddPlayList from "./componets/AddPlaylist"
import PlayList from "./componets/PlayList"
import Styled from "styled-components"

const Conteiner = Styled.div`
 display: flex;
 justify-content: center;
 text-align: center;
 font-size: 1.5em;
 font-family: monospace;
 flex-direction: column;
 background: pink;
 height: 40vw;
 width: 50%;
 align-content: center;
`


class App extends React.Component {
  state={
    trocaTela: "adicionar"
  }

 escolherTela = ()=>{
  switch (this.state.trocaTela){
    case "adicionar":
    return <AddPlayList/>
    case "playlist":
      return <PlayList/>
    default:
      return <AddPlayList/>
  }
}



onClickPlayList = (nometela) =>{
  this.setState({trocaTela: nometela})
}


  render(){
   

    return (
      
      <Conteiner>
        
        
        <button onClick={()=> this.onClickPlayList("adicionar")}>Pagina inicial</button>
        <button onClick={()=> this.onClickPlayList("playlist")}>Playlist</button>
        {this.escolherTela()}
        <b/>
        
      </Conteiner>
    );
  } 
  }
  

export default App;

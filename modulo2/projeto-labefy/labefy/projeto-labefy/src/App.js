import React  from "react"
import CriarPlayList from "./pages/criarPlayilist/CriarPlayList"
import Hender from "./components/Hender"
import styled from "styled-components"
import background from "./components/img/telaFundo.png"
import DetalhesPlayListPage from "./pages/detalhesPlayList/DetalhesPlayListPage"
// import DetalhesMusicas from "./pages/detalhesMusicas/DetalhesMusicas"


const Botao = styled.button `
display: flex;
margin: 10px;
border-radius: 20px;
border: none;
text-align: center;
background: #d427fa80;
color: white;
width: 10vw;
&:hover{
  cursor: pointer;
  background: #ffffff82;
}`



const ConteinerMain = styled.main`
 height: 60vw;
 background: lavender;
 font-family: sans-serif;

`



export default class App extends React.Component{
  state={
    telaAtual: "criar",
    clickDetalhesMsc:""
}
 
telaDetalheMsc =(id)=>{
this.setState({telaAtual: "playlist", clickDetalhesMsc: id})}







trocarTela =()=>{
  switch (this.state.telaAtual){
    case "criar":
      return <CriarPlayList/>
    case "playlist":
     return <DetalhesPlayListPage />
    default:
      return<CriarPlayList/>
     
    }}
  
         render(){
            return(
  <ConteinerMain 
      style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + background})`,
      backgroundRepeat: 'no-repeat',
      width:'100vw'}}>      
    
      <Hender/>
      {this.trocarTela()}
   
  </ConteinerMain>
          
)}}



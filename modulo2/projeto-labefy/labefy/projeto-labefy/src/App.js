import React  from "react"
import CriarPlayList from "./pages/CriarPlayList"
import Hender from "./components/Hender"
import styled from "styled-components"

const ConteinerMain = styled.main`
 height: 70vw;
 background: lavender;
 font-family: sans-serif;

`



export default class App extends React.Component{
  render(){
      return(
          <div>
            <ConteinerMain>
            <Hender/>
            <CriarPlayList/>
             
            </ConteinerMain>
            
             
            
          </div>
          
      )
  }
}



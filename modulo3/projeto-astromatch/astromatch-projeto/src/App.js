import React, { useState } from "react";
import Header from "./components/Header"
import Matches from "./pages/Matches"
import Perfis from "./pages/Perfis"
import styled from "styled-components"


/*export const ConjuntoApp = styled.div`
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    box-shadow: 
`
*/
 export const ConjuntoApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    display: flex;
    border: 1px solid;
    margin: 30%;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
   
    
 `

function App() {
  const [pagina, setPagina] = useState(true)
 
  const trocarTela = () => {
    setPagina(!pagina)
  }

  const trocaPagina = () => {
    switch (pagina) {
      case true:
        return <Perfis />
      case false:
        return <Matches />

    }}
  
  
    return (
      <body> 
     
     
      <ConjuntoApp>
        <Header trocarTela={trocarTela} />
        {trocaPagina()}
      </ConjuntoApp>
     
     
      </body>
    
  
  )}

export default App;
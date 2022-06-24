import React from "react"
import styled from "styled-components"
import Styled from "styled-components"

const ConteinerMain = styled.main`
    display:flex;
    justify-content: center;
    height: 100%;
    background: pink;
    padding: 20px;
    margin: 10px;
    align-content: center;
    justify-content: center;

`
export default class AddPlayList extends React.Component {

 
    render(){
     
     
      return (
        
        <ConteinerMain> 
         <div>
            <p>Crie sua playlist</p>
             <input type="text" placeholder="crie sua playlist" />
        </div>
           
        </ConteinerMain>
       
      )
    } 
    }
    
  
 
  
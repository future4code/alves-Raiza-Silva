import React from "react"
import styled from "styled-components"

const HendeTela = styled.header`
    height: 20%;
    display: flex;
    justify-content: center;
    background: orange;
    font-size: 20px;
    margin: 0;
    font-family: sans-serif;
    color: white;
`



export default class Hender extends React.Component {
   
    render(){
        
        return(
            < HendeTela>
                <p>Labenusers</p>
            </ HendeTela>
        )
    }
}
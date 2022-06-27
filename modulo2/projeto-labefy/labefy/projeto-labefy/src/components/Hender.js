import React from "react"
import styled from "styled-components"
import img from "./img/music.png"

const Img = styled.img`
 width: 40px;

`

const ContainerHender = styled.header`
 display: flex;
 background-color: #d769eab8;
 color: white;
 font-size: 8px;
 padding: 1px;
 text-align: center;
 width: 100vw;
 align-content: center;
 justify-content: center;

`
const Div = styled.header `
 display:flex;

`

export default class Hender extends React.Component{
    render(){
        return(
            <Div>
            <ContainerHender>
            <Div>
                <h2>LABEFY MUSIC</h2>
                <Img src={img}/>
            </Div>
            
            </ContainerHender>
              
            </Div>
        )
    }
}


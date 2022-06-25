import React from "react"
import styled from "styled-components"
import img from "./img/music.jpg"

const Img = styled.img`
 width: 30px;
`

const ContainerHender = styled.header`
 background-color: purple;
 color: white;
 font-size: 10px;
 padding: 5px;
 text-align: center;

`


export default class Hender extends React.Component{
    render(){
        return(
            <div>
            <ContainerHender>
            <div>
                <h2>LABEFY MUSIC</h2>
                <Img src={img}/>
            </div>
            
            </ContainerHender>
              
            </div>
        )
    }
}


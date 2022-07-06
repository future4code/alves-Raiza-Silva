import React from 'react'
//import { useState } from 'react'
import styled from "styled-components"
import Img from "./img/love.gif"

export const Logo = styled.img`
width: 150px;

`


export const ConjuntoHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
`

/*
export const ConjuntoDivHeader = styled.div`
width: 40%;
border: 1px solid pink;

`
*/
export const BotaoMatch = styled.button`
 border:none;
 border: none;
 background: #f25c76;
 border-radius: 20px;
 color: white;
 margin: 5px;
 &:hover:{
  cursor: pointer;
 }
`



export default function Header(props) {

    return (
        <ConjuntoHeader>
            <div>
                <Logo src={Img} alt={'logo'}></Logo></div>
            <div>
                <BotaoMatch button
                    onClick={props.trocarTela}
                >🙈💕</BotaoMatch>
            </div>
        </ConjuntoHeader>
    )
}
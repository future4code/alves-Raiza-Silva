import React from 'react'
//import { useState } from 'react'
import styled from "styled-components"
import logo from "../img/logo.png"
import date from "../img/date.png"

export const ConjuntoLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

`


export const BotaoDate = styled.button`


display: flex;
flex: none;

display: contents;
`

export default function Header(props) {

    return (
        <ConjuntoLogo>
            <div>
                <img src={logo} alt={"logo"} width='40%'></img>
            </div>
            <  BotaoDate onClick={props.trocarTela} ><img src={date} height='60px' width='60px' alt={"like"} /> </ BotaoDate>
        </ConjuntoLogo>

    )
} 
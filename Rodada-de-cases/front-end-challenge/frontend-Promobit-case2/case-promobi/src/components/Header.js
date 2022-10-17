import React from "react"
import logo from "../img/logo.svg"
import styled from "styled-components"

export const LogoHeader = styled.img`
  width: 184.74px;
  height:24.03px;
  position: absolute;
  left: 2%;
  right: 5%;
  top: 20%;
  bottom: -0.14%;

`
export const ConteinerHeader = styled.div`
  background: #5C16C5;
  position: absolute;
  width: 1440px;
  height: 56px;
  left: 0px;
  top: 0px;

`


export default function Header(){

        return <ConteinerHeader>
                  <LogoHeader src={logo}/>
              </ConteinerHeader>
    
}
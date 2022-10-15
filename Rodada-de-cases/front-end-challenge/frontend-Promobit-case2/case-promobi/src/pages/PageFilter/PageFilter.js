import React from "react"
import styled from "styled-components"

export const Conteinerfilter = styled.div`
 position: absolute;
 width: 1440px;
 height: 449px;
 left: 0px;
 top: 56px;
 background: #2D0C5E;
`
export const TextH1 = styled.h1`
 position: absolute;
 width: 781px;
 height: 112px;
 left: 328px;
 top: 141px;
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 700;
 font-size: 48px;
 line-height: 56px;
/* or 117% */
 text-align: center;
 letter-spacing: -0.005em;
 color: #FFFFFF;
`

export default class PageFilter extends React.Component {


    render() {

        return <Conteinerfilter>
            <TextH1> Milhões de filmes, séries e pessoas para descobrir. Explore já.</TextH1>
        </Conteinerfilter>
    }
}